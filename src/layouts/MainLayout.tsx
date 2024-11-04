import React, {useEffect} from 'react';
import PaginationComponents from "../components/PaginationComponents";
import {useSearchParams} from "react-router-dom";

const MainLayout = () => {
   const [query] = useSearchParams();

    useEffect(() => {
        console.log(query.get('page'))
    }, [query]);
    return (
        <div>
            <PaginationComponents/>
        </div>
    );
};

export default MainLayout;