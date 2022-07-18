import { Card, Button, CircularProgress } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Login as LoginDispatch } from '../Redux/Action'
import * as Yup from 'yup'
import { AppRoutes } from '../Routes/Routes'

function Login() {
  const [loginError, setLoginError] = useState({ loading: false, error: false });
  const initialField = { userName: '', password: '' }
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const userLogin = useSelector(e => e);

  const formSchema = Yup.object().shape({
    userName: Yup.string().required('UserName Required'),
    password: Yup.string().required('Password Required'),
  })

  const submitForm = (value) => {
    setLoginError({ ...loginError, loading: true })
    const userExist = userLogin.registerUsers.find((e) => e.userName === value.userName && e.password === value.password)
    if (userExist) {
      dispatch(LoginDispatch(userExist));
      navigate(AppRoutes.home.link)
    } else {
      setTimeout(() => {
        setLoginError({ loading: false, error: true })
      }, 5000);
    }
  }

  return (
    <div>
      <Card variant="outlined" className='Card'>
        <h1>Login</h1>
        <div className="centerItems">
          <Formik initialValues={initialField} validationSchema={formSchema} onSubmit={submitForm}>
            {({ errors, touched }) => (
              <Form>
                <Field name="userName" placeholder="UserName" className={errors.userName && touched.userName ? 'error' : ''} />
                {errors.userName && touched.userName ? (
                  <div className='error'>{errors.userName}</div>
                ) : null}
                <Field name="password" placeholder="Password" type="password" className={errors.password && touched.password ? 'error' : ''} />
                {errors.password && touched.password ? (
                  <div className='error'>{errors.password}</div>
                ) : null}
                <br />
                {
                  loginError.error
                    ? <div className="error">Invalid Login Detail</div>
                    : ""
                }
                {
                  loginError.loading
                    ? <CircularProgress />
                    : <Button type="submit" variant="contained">
                      Login
                    </Button>
                }
                <br />
                <Link to={AppRoutes.register.link}>
                  Register
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </div>
  )
}

export default Login