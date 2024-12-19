import * as Yup from 'yup';
export const signupValidation = Yup.object({
    name: Yup.string()
        .required('Name is required').min(3, 'Name must be at least 3 characters')
        .max(15, 'Name must be at most 15 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    cpassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match')
})