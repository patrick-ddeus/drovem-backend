import { db } from "../database/connect.js";

class ProjectRepository {

    create(reqParams) {
        const { name } = reqParams;
        const query = `
        INSERT INTO 
        projetos (nome) 
        VALUES ($1)`;

        return db.query(query, [name]);
    }

    sendProject(reqParams) {
        const { estudanteId, projetoId, turmaId, linkProjeto } = reqParams;

        const query = `
        INSERT INTO 
        entregas (id_estudante, id_projeto, status, link_projeto, id_turma) 
        VALUES ($1, $2, $3, $4, $5)`;
        return db.query(query, [estudanteId, projetoId, "entregue", linkProjeto, turmaId]);
    }

    listDoneProjects(projeto, turma) {
        const params = [];
        let query = `
            SELECT etr.id ,p.nome as nome_projeto, e.nome, e.foto, etr.nota FROM
            estudantes e 
            JOIN entregas etr ON e.id = etr.id_estudante
            JOIN projetos p ON p.id = etr.id_projeto
            WHERE TRUE
        `;

        if (projeto) {
            query += ` AND etr.id_projeto = $${params.length + 1}`;
            params.push(`${projeto}`);
        }

        if (turma) {
            query += ` AND etr.id_turma = $${params.length + 1}`;
            params.push(`${turma}`);
        }

        query += ` ORDER BY e.nome`

        return db.query(query, params);
    }

    list() {
        const query = `
        SELECT p.* FROM projetos p;`;
        return db.query(query);
    }

    updateGrade(reqParams) {
        const { nota, id } = reqParams;
        const query = `
            UPDATE entregas SET nota = $1 WHERE id = $2
        `;
        return db.query(query, [nota, id]);
    }
}


export default new ProjectRepository;