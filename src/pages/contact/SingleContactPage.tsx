import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUserContactModel} from "../../models/IUserContactModel";
import {userApiService} from "../../services/api.service";
import {useAppLocation} from "../../components/hucks/useAppLocation";


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
    const {state:{contact:item}} = useAppLocation <{contact:IUserContactModel}>();

    const [contact, setContact] = useState<IUserContactModel | null>(null)
    useEffect(() => {
        if (item){
            setContact(item)
        } else if (id){
            userApiService
                .getUserById(id)
                .then(value => setContact(value.data))
        } else{
            throw new Error('I fucker up')
        }

    }, [id, item]);
   

    return (
        <div>
            {contact && <>{contact.name} - {contact.username}</>}
        </div>
    );
};

export default SingleContactPage;