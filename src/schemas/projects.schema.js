import Joi from "joi";

export const SendProjectSchema = Joi.object({
    turma: Joi.number().required(),
    estudante: Joi.number().required(),
    projeto: Joi.number().required(),
    link: Joi.string().required().trim(),
});

export const ProjectSchema = Joi.object({
    name: Joi.string().required().trim()
});