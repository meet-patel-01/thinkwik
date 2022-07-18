import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import ViewDoc from '../Screens/ViewDoc'
import AuthMiddleware from '../Utility/AuthMiddleware'

export const AppRoutes = {
    home: { name: "home", link: "/", element: <Home />, auth: true },
    login: { name: "Login", link: "/login", element: <Login /> },
    register: { name: "register", link: "/register", element: <Register /> },   
    viewDoc: { name: "View Doc", link: "/viewDoc", element: <ViewDoc /> },   
}

function Routes() {  
    const registerRoute = ['login', 'register', 'home']    
    return (
        <Switch>
            {
                registerRoute.map((R, i) => {
                    const Obj = AppRoutes[R]
                    const newElement = Obj.auth ? <AuthMiddleware>{Obj.element}</AuthMiddleware> : Obj.element
                    return <Route key={i} path={Obj.link} element={newElement} index={Obj.index}></Route>
                })
            }
            <Route path={AppRoutes.viewDoc.link+"/:id"} element={AppRoutes.viewDoc.element}></Route>
        </Switch>
    )
}

export default Routes
