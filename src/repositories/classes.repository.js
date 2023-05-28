import { db } from "../database/connect.js";

class ClassesRepository {
    list() {
        const query = `
            SELECT t.* FROM turmas t;
        `;
        return db.query(query);
    }
}

export default new ClassesRepository