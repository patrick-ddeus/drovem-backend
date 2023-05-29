import ClassesRepository from "../repositories/classes.repository.js";

const getAllClasses = async (req, res) => {
    try {
        const { rows } = await ClassesRepository.list();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getClassesByStudentId = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await ClassesRepository.listClassesByStudentId(id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getAllClasses,
    getClassesByStudentId
};