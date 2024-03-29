import yup from 'yup'

class AuthYup {
    registerSchema = yup.object({
        name: yup.string().required(),
        password: yup.string().min(8).required(),
        email: yup.string().email().required(),
    })
    loginSchema = yup.object({
        password: yup.string().required(),
        email: yup.string().required()
    })
}


export default AuthYup = new AuthYup();