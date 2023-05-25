import { db } from "../database/connect.js";

class EnrollmentRepository {
    create(reqParams) {
        const { turmaId, estudanteId } = reqParams;

        const query = `INSERT INTO matriculas (id_turma, id_estudante) VALUES ($1, $2)`;
        return db.query(query, [turmaId, estudanteId]);
    }

    listEnrollmentByStudentId(id) {
        const query = `
        SELECT id FROM matriculas WHERE id_estudante = $1 AND data_saida IS NULL
        `;
        return db.query(query, [id])
    }
}


export default new EnrollmentRepository;