import Joi from "joi";

export const ClassSchema = Joi.object({
    name: Joi.string().required().trim()
});
