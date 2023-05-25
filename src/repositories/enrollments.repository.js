import { db } from "../database/connect.js";

class EnrollmentRepository {
    create(reqParams) {
        const { turmaId, estudanteId } = reqParams;

        const query = `INSERT INTO matriculas (id_turma, id_estudante) VALUES ($1, $2)`;
        return db.query(query, [turmaId, estudanteId]);
    }
}


export default new EnrollmentRepository;