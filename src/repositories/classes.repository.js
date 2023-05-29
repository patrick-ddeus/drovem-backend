import { db } from "../database/connect.js";

class ClassesRepository {
    create(reqParams) {
        const { name } = reqParams;
        const query = `
        INSERT INTO 
        turmas (nome) 
        VALUES ($1)`;

        return db.query(query, [name]);
    }

    list() {
        const query = `
            SELECT t.* FROM turmas t;
        `;
        return db.query(query);
    }

    listClassesByStudentId(id){
        const query = `
        SELECT t.*
        FROM turmas t
        WHERE t.id >= (
        SELECT id_turma
        FROM matriculas
        WHERE id_estudante = $1
            AND data_saida IS NULL
        );
    `;
    return db.query(query, [id]);
    }
}

export default new ClassesRepository