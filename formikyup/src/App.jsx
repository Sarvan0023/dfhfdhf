import './App.css'
import { useFormik,Formik,Form,Field } from 'formik'
import { signupValidation } from './signupValidation'

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: '',

}
const App = () => {

  const { values, handleBlur, handleChange, handleSubmit,errors } = useFormik({
    validationSchema: signupValidation,
    initialValues: initialValues,
    onSubmit: values => {
      console.log(values)
    },
  })


  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}>
        {({ errors })
          => (
            <Form >
            <label htmlFor="name">Name</label>
            <br />
            <Field type='text' name='name'></Field>
            <br />
            {errors.name && <small>{errors.name}</small>}
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email"
            values={values.email}
            onBlur={handleBlur}
            onChange={handleChange}/>
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password"
            values={values.password}
            onBlur={handleBlur}
            onChange={handleChange}/>
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />
            <label htmlFor="cpassword">Confirm password</label>
            <br />
            <input type="password" id="cpassword"
            values={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}/>
            <br />
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <button type='submit' className='SUBMIT'>Submit</button>
            </Form>
        )}
        
      
        </Formik>

    </div>
  )
}

export default App
