import { sanitizeObjects } from "../helpers/sanitizeObjects.js";
import ProjectRepository from "../repositories/projects.repository.js";

const sendProject = async (req, res) => {
    const { turma, estudante, projeto, link } = sanitizeObjects(req.body);

    try {
        await ProjectRepository.sendProject({
            estudanteId: estudante,
            projetoId: projeto,
            turmaId: turma,
            linkProjeto: link
        });

        res.status(200).json({ message: "Ok!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listDoneProjects = async (req, res) => {
    const { projeto, turma } = sanitizeObjects(req.query);

    try {
        const { rows } = await ProjectRepository.listDoneProjects(projeto, turma);

        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProject = async (req, res) => {
    const { name } = sanitizeObjects(req.body);

    try {
        await ProjectRepository.create({ name });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const listProjects = async (req, res) => {
    try {
        const { rows } = await ProjectRepository.list();

        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGrade = async (req, res) => {
    const { nota, id } = req.body;
    try {
        await ProjectRepository.updateGrade({ nota, id });
        res.sendStatus(200)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    sendProject,
    listDoneProjects,
    createProject,
    listProjects,
    updateGrade
};