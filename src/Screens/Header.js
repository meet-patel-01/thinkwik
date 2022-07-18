import { Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Logout } from '../Redux/Action';
import { AppRoutes } from '../Routes/Routes';

function Header() {
    const user = useSelector(e => e.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(Logout())
        navigate(AppRoutes.login)
    }
    
    return (
        <div className='header'>
            <div>
                {
                    user.firstName+" "+user.lastName
                }
            </div>            
            <Button onClick={logOut}>Logout</Button>            
        </div>
    )
}

export default Header