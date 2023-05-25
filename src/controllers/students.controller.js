import { sanitizeObjects } from "../helpers/sanitizeObjects.js";
import EnrollmentRepository from "../repositories/enrollments.repository.js";
import StudentsRepository from "../repositories/students.repository.js";

const insertOneStudent = async (req, res) => {
    const { nome, email, cpf, foto, turma } = sanitizeObjects(req.body);

    try {
        const { rows: [student] } = await StudentsRepository.create({ nome, email, cpf, foto });

        const classParams = {
            turmaId: turma,
            estudanteId: student.id
        };

        const { rows } = await EnrollmentRepository.listEnrollmentByStudentId(student.id);

        if (rows.length > 0) {
            return res.status(409).json({ error: 'Estudante já está cadastrado em uma turma' });
        }

        await EnrollmentRepository.create(classParams);
        res.status(201).json({ message: "Ok!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listStudents = async (req, res) => {
    const { turma } = sanitizeObjects(req.query);
    try {
        const { rows } = await StudentsRepository.listStudents(turma);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listOneStudent = async (req, res) => {
    const { id } = sanitizeObjects(req.params);
    try {
        const { rows } = await StudentsRepository.listOneStudentById(id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    insertOneStudent,
    listStudents,
    listOneStudent
};