import { useState, useEffect } from 'react';
import { setHashStorage, getHashStorage } from '../Functions/handleStorage';

export const useHash = () => {
    const [ hash, setHash ] = useState('Work');

    const handleHash = val => {
        setHashStorage(val);
        setHash(val);
    };

    useEffect(() => {
        const hashNow = getHashStorage();
        (hashNow) ? setHash(hashNow) : setHash('Work');
    }, [])

    return { hash, setHash, handleHash };
};