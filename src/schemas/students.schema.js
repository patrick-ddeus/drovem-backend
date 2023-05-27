import Joi from "joi";

const StudentSchema = Joi.object({
    nome: Joi.string().required().trim()
        .messages({
            'any.required': 'Campo nome é requerido'
        }),
    email: Joi.string().email().required()
        .messages({
            'any.invalid': 'O formato deve ser um email válido',
            'any.required': 'Campo email é requerido'
        }),
    cpf: Joi.string().length(11).pattern(/^[0-9]+$/).required().trim().messages({
        'any.required': 'Campo CPF é requerido'
    }),
    foto: Joi.string().required().trim()
        .messages({
            'any.required': 'A foto é requerida'
        }),
    turma: Joi.number().required(),
    estudante: Joi.number().allow("").optional()
});


export default StudentSchema;