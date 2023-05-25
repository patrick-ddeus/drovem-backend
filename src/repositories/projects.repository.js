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

    list(projeto, turma) {
        const params = [];
        let query = `
            SELECT e.nome, e.foto, etr.nota FROM
            estudantes e 
            JOIN entregas etr ON e.id = etr.id_estudante
            WHERE TRUE
        `;

        if (projeto) {
            query += ` AND etr.id_projeto = $1`;
            params.push(`${projeto}`);
        }

        if (turma) {
            query += ` AND etr.id_turma = $2`;
            params.push(`${turma}`);
        }

        return db.query(query, params);
    }
}


export default new ProjectRepository;