import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';

const AuthBtn = styled.button`
    background-color: transparent;
    color: #07583d;
    font-size: 24px;
    font-weight: 500;
    :hover {
        color: #fff;
    }
    ::active {
        color: #fff;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const AuthButton = () => {
    const { authUser: { userName, promptName} } = useContext(Context);

    return (
        <AuthBtn onClick={() => promptName()}>{userName}</AuthBtn>
    );
}
export default AuthButton;