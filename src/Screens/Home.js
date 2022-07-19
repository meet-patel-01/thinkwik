<<<<<<< HEAD
import React from 'react'
import { Button, Fab } from '@mui/material'
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header';
import Modal from '../Utility/Modal';
import TodoForm from './TodoForm';
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { DeleteTodo } from '../Redux/Action';
import { AppRoutes } from '../Routes/Routes';


function Home() {
  const todoLists = useSelector(e => e.todos)
  const dispatch = useDispatch()

  const [TodoData, setTodoData] = React.useState({ showForm: false, editId: 0, todos: todoLists ?? [] })  
  
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1},
    { field: 'name', headerName: 'First name', flex: 1},
    { field: 'description', headerName: 'Last name', flex: 1},
    { field: 'Action', headerName: 'Action', flex: 1, renderCell: (e) => <div><Link to={`${AppRoutes.viewDoc.link}/${e.id}`}><Button>View</Button></Link><Button onClick={(f) => setTodoData({...TodoData, editId: e.id, showForm: true}) }>Edit</Button><Button onClick={() => dispatch(DeleteTodo(e.id))}>Delete</Button></div> },   
  ];
  
  React.useEffect(() => {
    setTodoData({...TodoData, todos: todoLists, showForm: false})
  }, [todoLists])
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Header />
      <DataGrid
        rows={TodoData.todos}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}   
        components={{
          NoRowsOverlay: () => (
            <div>
              No document found
            </div>
          )
        }}    
      />
      <Fab size="secondary" color="primary" sx={{position: "fixed", bottom: "20px", right: "20px"}} onClick={() => setTodoData({...TodoData, showForm: true, editId: 0 })}>
        Add
      </Fab>
      <Modal open={TodoData.showForm} close={() => setTodoData({...TodoData, showForm: false})} title={TodoData.editId > 0 ? "Edit Todo" : "Add Todo"}>
        <TodoForm id={TodoData.editId} />
      </Modal>
    </div>  
  )
}

=======
import React from 'react'
import { Button, Fab } from '@mui/material'
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header';
import Modal from '../Utility/Modal';
import TodoForm from './TodoForm';
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { DeleteTodo } from '../Redux/Action';
import { AppRoutes } from '../Routes/Routes';


function Home() {
  const todoLists = useSelector(e => e.todos)
  const dispatch = useDispatch()

  const [TodoData, setTodoData] = React.useState({ showForm: false, editId: 0, todos: todoLists ?? [] })  
  
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1},
    { field: 'name', headerName: 'First name', flex: 1},
    { field: 'description', headerName: 'Last name', flex: 1},
    { field: 'Action', headerName: 'Action', flex: 1, renderCell: (e) => <div><Link to={`${AppRoutes.viewDoc.link}/${e.id}`}><Button>View</Button></Link><Button onClick={(f) => setTodoData({...TodoData, editId: e.id, showForm: true}) }>Edit</Button><Button onClick={() => dispatch(DeleteTodo(e.id))}>Delete</Button></div> },   
  ];
  
  React.useEffect(() => {
    setTodoData({...TodoData, todos: todoLists, showForm: false})
  }, [todoLists])
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Header />
      <DataGrid
        rows={TodoData.todos}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}   
        components={{
          NoRowsOverlay: () => (
            <div>
              No document found
            </div>
          )
        }}    
      />
      <Fab size="secondary" color="primary" sx={{position: "fixed", bottom: "20px", right: "20px"}} onClick={() => setTodoData({...TodoData, showForm: true, editId: 0 })}>
        Add
      </Fab>
      <Modal open={TodoData.showForm} close={() => setTodoData({...TodoData, showForm: false})} title={TodoData.editId > 0 ? "Edit Todo" : "Add Todo"}>
        <TodoForm id={TodoData.editId} />
      </Modal>
    </div>  
  )
}

>>>>>>> 6c790c2027dc0c1a7e2fe586677b9e0abd031eed
export default Home