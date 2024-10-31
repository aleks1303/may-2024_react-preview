import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";


// щоб відхопити параметри які у вас є
// він повертає всі параметри які у вас є
// використовується useParams

// чому id, тому що це записана в index: contacts:id
// переносимо це в розмітку й отримаємо SingleContactPage з id (любий який впроваджуємо)
const SingleContactPage = () => {

    const {id} = useParams();

    // передаємо сюди з ContactComponent, state
    // використовуємо хук useLocation в середині якого буде об'єкт state
    // з якого можна витягнути інформацію
    // це робиться для того, щоб в ContactsComponent не робити зайвий запит на fetch
    const {state:{contact:item}} = useLocation();
    console.log(item)

    const [contact, setContact] = useState<any>({})
    useEffect(() => {
        if (item){
            setContact(item)
        } else{
            fetch('https://jsonplaceholder.typicode.com/users/'+ id)
                .then((value) => value.json())
                .then(value => {
                    setContact(value)
                });
        }

    }, [id, item]);
   

    return (
        <div>
            {contact.name} - {contact.username}
        </div>
    );
};

export default SingleContactPage;