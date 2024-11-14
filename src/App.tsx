import React, {FC} from 'react';
import './App.css';
import UserComponent from "./components/UserComponent";

// use_case - це робити компоненти які будуть робити запит до баз даних,
// наприклад, як jsonplaceholder

// hoc - hi order component
// такі роду компоненти мають назву зазвичай з with, тобто додаємо (з)


const App:FC = () => {
  return (
    <div>
        <UserComponent/>
    </div>
  );
}

export default App;
