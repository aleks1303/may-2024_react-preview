import React, {FC, ReactNode} from 'react';
import'./Character.css';
import styles from './Character.module.css'
// це називається компонент (окрема розмітка)
// щоб передати не одну дів з інфо, а декілька
// і при виклику компонента в App декілька компонентів
// використовуються пропси (props) і передаються в аргумент функції

// створюємо інтерфейс

// щоб не використовувати children в IProps (interface)
// можливо interface використовується в інших місцях і там не повинні бути children
// звідси видаляємо і створюємо в type
interface IProps{
    name:string,
    image:string,
}


//створюємо type
type PropsWithChildren = IProps & {children?:ReactNode}


const Character:FC<PropsWithChildren> = ({name, image, children}) => {
    return (
        <div>
                <h2 className={styles.size30}>{name}</h2>
                <img
                    className={styles.w200}
                    src={image} alt={name}/>
                <div>{children}</div>

        </div>
    );
};

export default Character;