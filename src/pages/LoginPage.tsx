import React, {useEffect, useState} from 'react';
import {login} from "../services/api.service";
import {useOutletContext} from "react-router-dom";
import {IUserWithTokens} from "../models/IUserWithTokens";


const LoginPage = () => {
const loadIcon = useOutletContext<(iconLink:string) => void>();
    const [user, setUser] = useState<IUserWithTokens | null>(null)
    const [reason, setReason] = useState<string>()
    useEffect(() => {
        login().then(response => {
            loadIcon(response.image);
            setUser(response);
        }).catch(reason => setReason(reason))
    }, []);
    return (
        <div>
            LoginPage:{user?.firstName}
            {
                reason && <div>{reason}</div>
            }
        </div>
    );
};

export default LoginPage;