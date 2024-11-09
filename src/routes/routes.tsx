import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AuthResourcesPage from "../pages/AuthResourcesPage";

export const routes = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>, errorElement:<ErrorLayout/>, children:[
            {index:true, element:<HomePage/>},
            {path:'/login', element:<LoginPage/>},
            {path:'/auth/resources', element:<AuthResourcesPage/>}
        ]
    }
])