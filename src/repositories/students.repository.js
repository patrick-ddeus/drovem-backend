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
}


export default new StudentRepository;