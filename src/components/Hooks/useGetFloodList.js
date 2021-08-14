import { useEffect, useState, useCallback } from 'react';
import { setFloodStorage, getFloodStorage } from '../Functions/handleStorage';

export const useGetFloodList = () => {
    const [ floodList, setFloodList ] = useState(null);
    const [ error, setError ] = useState(null);

    const getFetch = useCallback(async () => {
        try {
            const result = await fetch('db/floodDb.json');
            const res = await result.json();
            setFloodList(res);
            setFloodStorage(res);
        } catch (err) {
            setError(err);
        }
    }, [setFloodList]);

    useEffect(() => {
        (!getFloodStorage()) ? getFetch() : setFloodList(getFloodStorage());
    }, [getFetch]);

    return { floodList, setFloodList, error }
}