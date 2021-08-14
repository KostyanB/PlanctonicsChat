import { useEffect, useState, useCallback } from 'react';
import { setUserListStorage, getUserListStorage } from '../Functions/handleStorage';

export const useUserList = () => {
    const [ userList, setUserList ] = useState(null);
    const [ error, setError ] = useState(null);

    const getFetch = useCallback(async () => {
        try {
            const result = await fetch('db/users.json');
            const res = await result.json();
            setUserListStorage(res);
            setUserList(res);
        } catch (err) {
            setError(err);
        }
    }, [setUserList]);

    useEffect(() => {
        (!getUserListStorage()) ? getFetch() : setUserList(getUserListStorage());
    }, [getFetch]);

    return { userList, setUserList, error }
}