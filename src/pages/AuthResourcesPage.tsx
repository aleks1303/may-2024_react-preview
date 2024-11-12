import React, {useState} from 'react';
import {IProduct} from "../models/IProduct";
import {loadAuthProduct, refresh} from "../services/api.service";
import {AxiosError} from "axios";

const AuthResourcesPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const onClickHandler = async () =>{
        //     тут повинні бути якісь продукти
        //     setProduct
        try{
            let responseWithProducts = await loadAuthProduct();
            console.log(responseWithProducts)
            setProducts(responseWithProducts)

        }
        catch (e) {
            let error = e as AxiosError;
            alert(error.message);
            await refresh()
        }

    }
    return (
        <div>
            <div>
                <button onClick={onClickHandler}
                >show auth products</button>
                <div>
                    {
                        products.length > 0 &&
                        <div>{products.map(product => <div key={product.id}>{product.title}</div>)}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AuthResourcesPage;