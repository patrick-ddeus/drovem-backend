import ClassesRepository from "../repositories/classes.repository.js";

const getAllClasses = async (req, res) => {
    try {
        const { rows } = await ClassesRepository.list();
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getAllClasses
};