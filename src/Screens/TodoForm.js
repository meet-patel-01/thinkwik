<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Button, CircularProgress } from '@mui/material';
import { AddTodo, EditTodo } from '../Redux/Action';

function TodoForm({ id }) {
    const initFields = {
        name: "",
        description: ""
    }

    const [loader, setLoader] = React.useState(false);       
    const fields = useSelector(e => e.todos.find(f => f.id === id)) ?? initFields;
    const index = useSelector(e => e.todos.findIndex( x => x.id === id ))
    const dispatch = useDispatch();
    
    const formSchema = Yup.object().shape({
        name: Yup.string().required('Todo Name Required'),
        description: Yup.string().required('Todo Description Required'),
    })

    const submitForm = (values) => {
        setLoader(true)        
        let data = {id: (id > 0 ? id : Date.now()), ...values}
        if(id > 0){
            data.index = index
        }
        setTimeout(() => {            
            setLoader(false)
            dispatch(id > 0 ? EditTodo(data) : AddTodo(data))            
        }, 500);       
    }

    return (
        <div>
            <div className="centerItems">
                <Formik initialValues={fields} validationSchema={formSchema} onSubmit={submitForm}>
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="name" placeholder="Name" className={errors.name && touched.name ? 'error' : ''} />
                            {errors.name && touched.name ? (
                                <div className='error'>{errors.name}</div>
                            ) : null}

                            <Field name="description" placeholder="Description" className={errors.description && touched.description ? 'error' : ''} />
                            {errors.description && touched.description ? (
                                <div className='error'>{errors.description}</div>
                            ) : null}
                            <br />
                            {
                                loader
                                    ? <CircularProgress />
                                    : <Button type="submit" variant="contained">
                                        {
                                            id > 0
                                            ? "Update"
                                            : "Add"
                                        }
                                    </Button>
                            }                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

=======
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Button, CircularProgress } from '@mui/material';
import { AddTodo, EditTodo } from '../Redux/Action';

function TodoForm({ id }) {
    const initFields = {
        name: "",
        description: ""
    }

    const [loader, setLoader] = React.useState(false);       
    const fields = useSelector(e => e.todos.find(f => f.id === id)) ?? initFields;
    const index = useSelector(e => e.todos.findIndex( x => x.id === id ))
    const dispatch = useDispatch();
    
    const formSchema = Yup.object().shape({
        name: Yup.string().required('Todo Name Required'),
        description: Yup.string().required('Todo Description Required'),
    })

    const submitForm = (values) => {
        setLoader(true)        
        let data = {id: (id > 0 ? id : Date.now()), ...values}
        if(id > 0){
            data.index = index
        }
        setTimeout(() => {            
            setLoader(false)
            dispatch(id > 0 ? EditTodo(data) : AddTodo(data))            
        }, 500);       
    }

    return (
        <div>
            <div className="centerItems">
                <Formik initialValues={fields} validationSchema={formSchema} onSubmit={submitForm}>
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="name" placeholder="Name" className={errors.name && touched.name ? 'error' : ''} />
                            {errors.name && touched.name ? (
                                <div className='error'>{errors.name}</div>
                            ) : null}

                            <Field name="description" placeholder="Description" className={errors.description && touched.description ? 'error' : ''} />
                            {errors.description && touched.description ? (
                                <div className='error'>{errors.description}</div>
                            ) : null}
                            <br />
                            {
                                loader
                                    ? <CircularProgress />
                                    : <Button type="submit" variant="contained">
                                        {
                                            id > 0
                                            ? "Update"
                                            : "Add"
                                        }
                                    </Button>
                            }                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

>>>>>>> 6c790c2027dc0c1a7e2fe586677b9e0abd031eed
export default TodoForm