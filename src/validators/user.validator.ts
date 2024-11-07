import Joi from "joi";


// тут визначається схема по якій об'єкти повинні валідуватися
// схема визначається об'єктом

const userValidator = Joi.object({
    // Joi повинен взяти username і перевірити чи являється він string
    // по друге, що воно required
    // потім вставити pattern
    // повідомлення з помилками також прописуємо тут
    username:Joi.string().pattern(/\w{3,}/).required().messages({
        "string.pattern.base":"Only chars allowed & this must be at least 4 character"
    }),

    password:Joi.string().min(3).max(7).required().messages({
        "string.min":"password can be at least 3 chars",
        "string.max":"password cannot at least 6 chars"
    }),

    age:Joi.number().min(1).max(117).required().messages({
        "number.min":"min age is 1",
        "number.max":"max age is 117"
    })
})

export default userValidator