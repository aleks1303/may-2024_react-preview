import React from 'react';
import {useForm} from "react-hook-form";

interface IFormProps {
    username:string,
    password:string,
    age:number
}

const FormComponents = () => {
    
    const {
        handleSubmit,
        register,
        // errors відповідає за помилки, isValid - за перевірку (valid of no)
        formState:{errors,isValid}
    //     валідація відбувається на цьому рівні у props
    } = useForm<IFormProps>({
        mode:'all'
    });
    const customerHandler = (formDataProps:IFormProps)=>{
        console.log(formDataProps)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customerHandler)}>
                <label><input type="text" {...register('username',
                    {
                        required: {value:true, message:'name is required'},
                        // pattern: {
                        //     value: /\w+/,
                        //     message: 'wrong name'
                        // },
                        minLength: {value: 4, message: 'wrong'}
                    })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label><input type="text" {...register('password',
                    {
                        required: true,
                        minLength: {value: 3, message: 'pass too short'},
                        maxLength: {value: 8, message: 'pass too long'}
                    })} />
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label><input type={"number"} {...register('age',
                    {
                        required: true,
                        valueAsNumber: true, /*конвертуються в числове значення*/
                        min: {value: 1, message: 'pass too small'},
                        max: {value: 117, message: 'pass too big'}
                    })} />
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                {/*кнопка валідна коли всі input правильно введені*/}
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponents;