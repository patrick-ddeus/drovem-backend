import { db } from "../database/connect.js";

class StudentRepository {
    create(reqParams) {
        const { nome, cpf, email, foto } = reqParams;

        const query = `
        INSERT 
        INTO estudantes (nome, cpf, email, foto) 
        VALUES ($1, $2, $3, $4)
        RETURNING id`;
        return db.query(query, [nome, cpf, email, foto]);
    }

    listStudents(studentClass) {
        const params = [];

        let query = `
        SELECT e.* FROM estudantes e
        JOIN matriculas m ON m.id_estudante = e.id
        WHERE e.id = m.id_estudante
        `;

        if (studentClass) {
            query += ` AND m.id_turma = $1`;
            params.push(`${studentClass}`);
        }
        return db.query(query, params);
    }

    listOneStudentById(id) {
        const query = `
        SELECT estudantes.*, JSON_AGG(JSON_BUILD_OBJECT('nome_turma', turmas.nome, 'data_ingresso', matriculas.data_ingresso, 'data_saida', matriculas.data_saida)) AS turmas
        FROM estudantes
        JOIN matriculas ON estudantes.id = matriculas.id_estudante
        JOIN turmas ON matriculas.id_turma = turmas.id
        WHERE estudantes.id = $1
        GROUP BY estudantes.id`;
        return db.query(query, [id]);
    }

    updateStudent(reqParams) {
        const { estudante, nome, foto, cpf, email } = reqParams;
        const query = `
        UPDATE 
        estudantes 
        SET nome = $1, foto = $2, cpf = $3, email = $4 WHERE id = $5
        `;
        return db.query(query, [nome, foto, cpf, email, estudante]);
    }

}


export default new StudentRepository;