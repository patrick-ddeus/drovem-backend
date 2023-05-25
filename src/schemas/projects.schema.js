import Joi from "joi";

const StudentSchema = Joi.object({
    turma: Joi.number().required(),
    estudante: Joi.number().required(),
    projeto:Joi.number().required(),
    link: Joi.string().required().trim(),
});

export default StudentSchema;