import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from "./model/IUser";
import UserComponent from "./components/user/UserComponent";
import {getUsers} from "./services/user.api.services";
import PostsComponents from "./components/posts/PostsComponents";
import {IPost} from "./model/IPost";
import {getPostsOfUser} from "./services/post.api.services";


const App:FC = () =>{

 /*   // branch fetch-data  треба запровадити цей запит у div, як це зробити
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));


// щоб в майбутньому можна було перейменувати змінну
// також змінити інтерфейс
// використовують 2 спеціалізовані функції huk
// useState та useEffect
// в середину useState записується початковий стан, який буде відмальовуватись
//  і з неї буде брати коли вона буде змінюватись
// useEffect - дозволить зручно робити один раз запит кудись
// і більше не робити його, інакше без useEffect автоматично все зациклиться на безкінечний цикл

    // викликаємо useState і передаємо users
    // з users беремо інформацію
    // через setUsers впроваджуємо інфо
    // useState каже, що початковий стан для users буде пустий масив
    // а setUsers - це setter для пустого масиву на майбутнє
    // і useState повертає масив з двох елементів (users і setUsers)
    // через один брати стан елементів
    // через інший змінювати
    // в setUsers є трігер і якщо через setUsers змінюють users, то розмітку в div необхідно перемалювати
*/
    const [users, setUsers] = useState<IUser[]>([])

    //  створимо для posts property
    const [posts, setPosts] = useState <IPost[]>([])

    const [userId, setUserId] = useState<number>(0)
    // branch services
    // ця логіка дуже велика і вона не повинна належати до компонентів
    // компонент займається user інтерфейсом, але не логікою
    // описувати процедури в компоненті не гарно
    // що робити?
    // створити сервісний прошарок
    // це не обов'язково, але це добра організація коду
    // створимо папку services і файл user.api.services.ts
    // вирізаємо fetch з useEffect і переносимо в файл


    // повертаємо об'єкт з логікою з services
    // і продовжуємо з value

    // викликаємо useEffect
    useEffect(() =>{
        getUsers()
            .then(value => {
                setUsers(value.data)
            })

    //     можна вставити функцію
    //     наприклад, якщо закрити якусь інформацію
    //     після того як відбулось підписка, або отримання даних
        return () => {
            console.log('end')

        }
    }, []);

   //  cтворюємо змінну куди передамо id, щоб він з'явився - так не вийде
   //  необхідно робити через хук useState
   //  назва set повинна бути названа однаково зі змінною




   //  викликаємо useEffect
    useEffect(() => {
        if(userId !== 0) {
           getPostsOfUser(userId).then(value => setPosts(value.data))
        }
    }, [userId]);

   //  щоб викликати user з id, треба передати аргумент в функцію
   //  і вивести в консоль id, щоб побачити що відбулося
   //  потім передаємо в компоненти, а також в UserComponent
   const clickHendler = (id:number) =>{
       setUserId(id)
   }

    return (
        <div>
        {/*    передаємо сюди users через мар*/}
            {
                users.map(({id, name, username, email}, index) =>
                    // в div необхідно вставити ключик, для кращої роботи react
                    // це унікальний ключ (це може бути id або index)
                   <UserComponent
                       key={index}
                       id={id}
                       name={name}
                       username={username}
                       email={email}
                       clickHendler = {clickHendler}
                   />)

            }
            <div>
                <PostsComponents posts={posts}/>
            </div>
        </div>
    )
}

export default App;


// branch :master/fetch-data/state-lifting
// (як зробити, щоб в App users з'явилась детальна інформація про нашого користувача
// при натисканні на кнопку
// необхідно зробити своєрідне підняття компоненту user на зовні до його батьківського компоненти
// це називається state-lifting
// витягуємо state свого user з компоненти UserComponent до App.tsx
// або будь-якої батьківської компоненти
// він може бути будь-яку кількість рівнів в гору, як і props


//branch axios: для того, щоб менше використовувати fetch
//існують бібліотеки які замінять fetch


//branch axios/axios_lifting_together
// робимо так, щоб замість userId передавались posts user









