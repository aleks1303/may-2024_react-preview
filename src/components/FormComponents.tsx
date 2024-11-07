import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator";

interface IFormProps {
    username:string,
    password:string,
    age:number
}

// бібліотека joi - для валідації
// бібліотека hookform/resolves - допомогає все між собою вирішити

const FormComponents = () => {
    
    const {
        handleSubmit, register,
        // errors відповідає за помилки, isValid - за перевірку (valid of no)
        formState:{errors,isValid}
    //     валідація відбувається на цьому рівні у props
    } = useForm<IFormProps>({
        mode:'all', resolver:joiResolver(userValidator)
    });
    const customerHandler = (formDataProps:IFormProps)=>{
        console.log(formDataProps)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customerHandler)}>
                <label>
                    <input type="text" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label>
                    <input type="text" {...register('password')} />
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label>
                    <input type={"number"} {...register('age')} />
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                {/*кнопка валідна коли всі input правильно введені*/}
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponents;