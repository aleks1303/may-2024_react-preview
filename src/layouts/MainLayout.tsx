import React, {useEffect, useState} from 'react';
import PaginationComponents from "../components/PaginationComponents";
import {useSearchParams} from "react-router-dom";
import CharactersComponent from "../components/CharactersComponent";
import {ICharacter} from "../models/ICharacter";
import {characterService} from "../services/api.services";
import charactersComponent from "../components/CharactersComponent";
import {ICharacterResponse} from "../models/ICharacterResponce";

const MainLayout = () => {
    const [query,setQuery] = useSearchParams({page:'1'});


    const [characterResponseState, setCharacterResponseState] = useState<ICharacterResponse> ( {
        info:{
            count:0,
            pages:0,
            prev:null,
            next:null,
        },
        results:[]
    })
    useEffect(() => {
        const currentPage = query.get('page')|| '1';
        characterService.getAll(currentPage).then(value => {
                setCharacterResponseState(value.data)
            }
        )
    }, [query]);
    return (
        <div>
            <CharactersComponent characters = {characterResponseState.results}/>
            <hr/>
            <PaginationComponents
                prev={characterResponseState.info.prev}
                next={characterResponseState.info.next}
            />
        </div>
    );
};

export default MainLayout;