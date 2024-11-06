import React, {FormEvent, useState} from 'react';

// не контрольовані компоненти - це коли клієнт сам змінює контент в структурі
// використовується здебільшого у формах
// на div це ніхто не ставить

interface IFormProps{
    username:string,
    password:string
}

const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username:'foobar',
        password:'1111'
    })
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
       /* це для того, щоб витягти з form значення
        const form = e.target as HTMLFormElement;
        console.log(form)
        console.log(form.username.value)
        console.log(form.password.value)*/

        let user = {
            username:formState.username,
            password:formState.password
        }
        console.log(user)
    };

   /* // це перший спосіб зробити контрольовану форму
    const handleUsernameChange = (e:FormEvent<HTMLInputElement>) =>{
        const input = e.target as HTMLInputElement;
        console.log(input.value)
        setFormState({...formState, username:input.value})

    };
    const handlePasswordChange = (e:FormEvent<HTMLInputElement>) =>{
        const input = e.target as HTMLInputElement;
        console.log(input.value)
        setFormState({...formState, password:input.value})
    };*/

    const handleInputChange = (e:FormEvent<HTMLInputElement>) =>{
        const input = e.target as HTMLInputElement;
        setFormState({...formState, [input.name]:input.value})
        console.log(input.name)

    };


    return (
        //     як контролювати стан через input
        // просимо атрибут value брати з formState username
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;