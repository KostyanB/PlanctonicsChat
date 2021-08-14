import { useEffect, useState, useCallback } from 'react';
import { setWorkStorage, getWorkStorage } from '../Functions/handleStorage';

export const useGetWorkList = () => {
    const [ workList, setWorkList ] = useState(null);
    const [ error, setError ] = useState(null);

    const getFetch = useCallback(async () => {
        try {
            const result = await fetch('db/workDb.json');
            const res = await result.json();
            setWorkList(res);
            setWorkStorage(res);
        } catch (err) {
            setError(err);
        }
    }, [setWorkList]);

    useEffect(() => {
        (!getWorkStorage()) ? getFetch() : setWorkList(getWorkStorage());
    }, [getFetch]);

    return { workList, setWorkList, error }
}