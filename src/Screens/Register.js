import { Card, Button, CircularProgress } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Register as RegisterDispatch } from '../Redux/Action'
import * as Yup from 'yup'
import { AppRoutes } from '../Routes/Routes'


function Register() {
  let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) ?? [];

  const [loginError, setLoginError] = useState({ loading: false, error: false });
  const initialField = { firstName: '', lastName: '', userName: '', password: '' }
  const dispatch = useDispatch()  
  const navigate = useNavigate();


  const formSchema = Yup.object().shape({
    firstName: Yup.string().required('FirstName Required'),
    lastName: Yup.string().required('LastName Required'),
    userName: Yup.string().required('UserName Required'),
    password: Yup.string().required('Password Required'),
  })

  const submitForm = (value) => {
    setLoginError({ ...loginError, loading: true }) 
    setTimeout(() => {
      dispatch(RegisterDispatch(value));  
      localStorage.setItem("registerUsers", JSON.stringify([...registerUsers, value]));
      navigate(AppRoutes.login.link)                       
    }, 5000);       
  }

  return (
    <div>
      <Card variant="outlined" className='Card'>
        <h1>Register</h1>
        <div className="centerItems">
          <Formik initialValues={initialField} validationSchema={formSchema} onSubmit={submitForm}>
            {({ errors, touched }) => (
              <Form>
                <Field name="firstName" placeholder="first Name" className={errors.firstName && touched.firstName ? 'error' : ''} />
                {errors.firstName && touched.firstName ? (
                  <div className='error'>{errors.firstName}</div>
                ) : null}
                <Field name="lastName" placeholder="last Name" className={errors.lastName && touched.lastName ? 'error' : ''} />
                {errors.lastName && touched.lastName ? (
                  <div className='error'>{errors.lastName}</div>
                ) : null}
                <Field name="userName" placeholder="user Name" className={errors.userName && touched.userName ? 'error' : ''} />
                {errors.userName && touched.userName ? (
                  <div className='error'>{errors.userName}</div>
                ) : null}
                <Field name="password" placeholder="password" type="password" className={errors.password && touched.password ? 'error' : ''} />
                {errors.password && touched.password ? (
                  <div className='error'>{errors.password}</div>
                ) : null}
                <br />                
                {
                  loginError.loading
                    ? <CircularProgress />
                    : <Button type="submit" variant="contained">
                      Submit
                    </Button>
                }
                <br />
                <Link to={AppRoutes.login.link}>
                  Login
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </div>
  )
}

export default Register