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

const listProjects = async (req, res) => {
    const { projeto, turma } = sanitizeObjects(req.query);

    try {
        const { rows } = await ProjectRepository.list(projeto, turma);

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


export default {
    sendProject,
    listProjects,
    createProject
};