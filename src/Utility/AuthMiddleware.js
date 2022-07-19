<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, useLocation} from 'react-router'
import { AppRoutes } from '../Routes/Routes'

function AuthMiddleware({children}) {    
    const checkUser = useSelector((e) => e)
    const location = useLocation()

    return checkUser.user ? children : <Navigate to={AppRoutes.login.link} state={{ from: location }} />
}

=======
import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, useLocation} from 'react-router'
import { AppRoutes } from '../Routes/Routes'

function AuthMiddleware({children}) {    
    const checkUser = useSelector((e) => e)
    const location = useLocation()

    return checkUser.user ? children : <Navigate to={AppRoutes.login.link} state={{ from: location }} />
}

>>>>>>> 6c790c2027dc0c1a7e2fe586677b9e0abd031eed
export default AuthMiddleware