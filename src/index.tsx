import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import ErrorLayout from "./layouts/error/ErrorLayout";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// заміняємо App на браузер - router
// він буде відповідати за всі маршрути замість App
// це конфігурації, які стосуються того, що треба відображати
// якщо в браузері є певне посилання /url
// цей маршутизатор визначаємо один раз

// створюємо 
const browserRouter = createBrowserRouter([
    // в середину масиву передають об'єкти з характеристикою, шляхом - path
    // якщо хтось переходить на url / можна показати через element (щось)
    // звідси беремо елемент і вставляємо в root.render - RouterProvider і там він рендереться
    // тут потрібні бути layout


    // якщо хтось вводить не дійсне посилання з'являється помилка - попередження
    // необхідно додатково для запобігання цього зробити власний текст з помилкою
    // для цього використовуємо errorElement, так може бути: page, components ...

    {path:'/', element:<MainLayout/>,
        errorElement:<ErrorLayout/>,
        //     далі в Outlet вставляємо через children text
        children:[
            {path:'about', element:<AboutPage/>},
            {path:'contacts', element:<ContactsPage/>},

        // Тут зробимо текст за замовчування
        // це для того, щоб відображалась якась інфо до того, як клікнути на about or contacts
        // це робиться без path, але з індексом true
            {element:<AboutPage/>, index: true}
        ]
    },




]);

root.render(
    <RouterProvider router={browserRouter}/>
);













// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
