
export const setWorkStorage = data => localStorage.setItem('planctonics-work-chat', JSON.stringify(data));

export const getWorkStorage = () => JSON?.parse(localStorage.getItem('planctonics-work-chat'));

export const setFloodStorage = data => localStorage.setItem('planctonics-flood-chat', JSON.stringify(data));

export const getFloodStorage = () => JSON?.parse(localStorage.getItem('planctonics-flood-chat'));

export const setUserListStorage = data => localStorage.setItem('planctonics-user-list', JSON.stringify(data));

export const getUserListStorage = () => JSON?.parse(localStorage.getItem('planctonics-user-list'));

export const setUserStorage = data => localStorage.setItem('planctonics-user', data);

export const getUserStorage = () => localStorage.getItem('planctonics-user');

export const setHashStorage = data => localStorage.setItem('planctonics-hash', data);

export const getHashStorage = () => localStorage.getItem('planctonics-hash');