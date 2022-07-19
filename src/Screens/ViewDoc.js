<<<<<<< HEAD
import { Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { DeleteTodo } from '../Redux/Action'
import { AppRoutes } from '../Routes/Routes'

function ViewDoc() {
    const id = useParams().id
    console.log(id);
    const getData = useSelector(e => e.todos.find((f) =>f.id === parseInt(id)))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteDoc = () => {
        dispatch(DeleteTodo(parseInt(id)))
        navigate(AppRoutes.home.link)
    }
  return (
    <div>
        {
            getData
            ? <>
                <h3>name</h3>
                {getData.name}
                <h3>Description</h3>
                {getData.description}
                <br />
                <br />
                <Button onClick={deleteDoc}>Delete</Button>
                <Button onClick={() => navigate(AppRoutes.home.link)}>back</Button>
                </>
            : "Wrong Id"
        }
    </div>
  )
}

=======
import { Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { DeleteTodo } from '../Redux/Action'
import { AppRoutes } from '../Routes/Routes'

function ViewDoc() {
    const id = useParams().id
    console.log(id);
    const getData = useSelector(e => e.todos.find((f) =>f.id === parseInt(id)))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteDoc = () => {
        dispatch(DeleteTodo(parseInt(id)))
        navigate(AppRoutes.home.link)
    }
  return (
    <div>
        {
            getData
            ? <>
                <h3>name</h3>
                {getData.name}
                <h3>Description</h3>
                {getData.description}
                <br />
                <br />
                <Button onClick={deleteDoc}>Delete</Button>
                <Button onClick={() => navigate(AppRoutes.home.link)}>back</Button>
                </>
            : "Wrong Id"
        }
    </div>
  )
}

>>>>>>> 6c790c2027dc0c1a7e2fe586677b9e0abd031eed
export default ViewDoc