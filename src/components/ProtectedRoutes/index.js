import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useState,useEffect} from 'react'

const ProtectedRoutes = ()=> {
    const location = useLocation();
    const [loggedInStatus,setLoggedInStatus] = useState(true)

    useEffect(()=>{
        const authToken = localStorage.getItem("token")

        if(authToken !== null){
            setLoggedInStatus(true)        
        }else{
            setLoggedInStatus(false)
        }

    },[location])

    return loggedInStatus ? <Outlet/> : <Navigate to="/login" replace state={{from:location}} />
}

export const StudentRoutes = ()=>{
    const [isStudentUser,setUserType] = useState(true)
    const location = useLocation();

    useEffect(()=>{
        const {isStudent} = JSON.parse(localStorage.getItem("userInfo")) || {}
        isStudent ? setUserType(true) : setUserType(false)
    },[location])
    
    return isStudentUser ? <Outlet/> : <Navigate to="/" replace state={{from:location}} />

}

/* export const ProfessorRoutes = ()=>{
    const [isStudent,setUserType] = useState(false)

} */

export default ProtectedRoutes