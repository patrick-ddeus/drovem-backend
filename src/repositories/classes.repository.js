import { db } from "../database/connect.js";

class ClassesRepository {
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