import { useState, useEffect } from 'react';
import { setUserStorage, getUserStorage, getUserListStorage } from '../Functions/handleStorage';

export const useAuth = () => {
    const [ userName, setUserName ] = useState();
    const [ authStatus, setAuthStatus ] = useState(false);

    const checkName = val => {
        const check = getUserListStorage().some(item => item.name === val);
        setAuthStatus(check);
    };

    const promptName = () => {
        const newName = prompt('Представьтесь пожалуйста');
        if (newName) {
            setUserStorage(newName);
            setUserName(newName);
            checkName(newName);
        }
    };

    useEffect(() => {
        const user = getUserStorage();
        (user) ? setUserName(user) : setUserName('Кто здесь?');
        checkName(user);
    }, [])

    return { userName, authStatus, promptName };
}