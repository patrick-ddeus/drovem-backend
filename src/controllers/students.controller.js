import { sanitizeObjects } from "../helpers/sanitizeObjects.js";
import EnrollmentRepository from "../repositories/enrollments.repository.js";
import StudentsRepository from "../repositories/students.repository.js";

const insertOneUser = async (req, res) => {
    const { nome, email, cpf, foto, turma } = sanitizeObjects(req.body);

    try {
        const { rows: [student] } = await StudentsRepository.create({ nome, email, cpf, foto });

        const classParams = {
            turmaId: turma,
            estudanteId: student.id
        };

        await EnrollmentRepository.create(classParams);
        res.status(201).json({ message: "Ok!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    insertOneUser
};