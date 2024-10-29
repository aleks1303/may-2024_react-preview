import React, {FC, ReactNode} from 'react';
import IUser from "../../model/IUser";


type UserComponentsWithChildren <T> = T & {children?:ReactNode} & {clickHendler:(id:number) => void}
const UserComponent:FC <UserComponentsWithChildren<IUser>>  = ({id, name, clickHendler}) => {
    return (
        <div>
            {<div> {id}: {name} -
                {/*в кнопку передаємо callback function і туди передаємо clickHendler(id)*/}
                <button onClick={()=>{
                    clickHendler(id)
                }}>chose</button>
                <hr/>
            </div>}
        </div>
    );
};

export default UserComponent;



// branch :master/fetch-data/state-lifting
// (як зробити, щоб в App users з'явилась детальна інформація про нашого користувача
// при натисканні на кнопку
//необхідно зробити своєрідне підняття компоненту user на зовні до його батьківського компоненти
//це називається state-lifting
//витягуємо state свого user з компоненти UserComponent до App.tsx
// або будь-якої батьківської компоненти
// він може бути будь-яку кількість рівнів в гору, як і props
