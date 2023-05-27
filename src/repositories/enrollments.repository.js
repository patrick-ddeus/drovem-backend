import { db } from "../database/connect.js";

class EnrollmentRepository {
    create(reqParams) {
        const { turmaId, estudanteId } = reqParams;

        const query = `
        INSERT INTO matriculas (id_turma, id_estudante)
        SELECT $1, $2
        WHERE NOT EXISTS (
          SELECT 1
          FROM matriculas
          WHERE id_estudante = $2 AND id_turma = $1
        )`;
        return db.query(query, [turmaId, estudanteId]);
    }

    listEnrollmentByStudentId(id) {
        const query = `
        SELECT matriculas.* FROM matriculas WHERE id_estudante = $1 AND data_saida IS NULL
        `;
        return db.query(query, [id]);
    }

    updateStudentClass(enrollmentId) {
        const query = `
        UPDATE matriculas SET data_saida = NOW() WHERE id = $1
        `;
        return db.query(query, [enrollmentId]);
    }
}


export default new EnrollmentRepository;