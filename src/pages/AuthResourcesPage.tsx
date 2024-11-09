import React, {useState} from 'react';
import {IProduct} from "../models/IProduct";

const AuthResourcesPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    return (
        <div>
            <div>
                <button onClick={async () =>{
                //     тут повинні бути якісь продукти
                //     setProduct

                    await loadAuthProduct();
                }}
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