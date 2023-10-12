import React   from 'react'
import Layout2 from '../pages/Layout2/layout2';


const authProtectedRoutes = [
    { path:"/", component: <Layout2 /> },
]

export default authProtectedRoutes;