import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { Button } from '../Global/Button';
import workImg from '../../img/planc_w1.png';
import floodImg from '../../img/planc_f1.png';
import AuthButton from './AuthButton';

const HeadContainer = styled.div `
        -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
    -ms-grid-row: 1;
    grid-row: 1;
    background-color: #61ffca;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;
const SelectBtn = styled(Button)`
    border-radius: 10px;
    background-position: bottom;
    background-color: #bcfde7;
    width: 80px;
    height: 80px;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    -webkit-text-stroke: 2px #07583d;
    :before {
        content: "";
        display: inline-block;
        vertical-align: bottom;
        height: 100%;
    }
    @media (max-height: 576px) {
        width: 60px;
        height: 60px;
        font-size: 20px;
    }
`;
const WorkBtn = styled(SelectBtn)`
    background-image: url(${workImg});
    background-size: contain;
`;
const FloodBtn = styled(SelectBtn)`
    background-image: url(${floodImg});
    background-size: cover;
`;
const ChatHeader = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: #07583d;
    @media (max-width: 768px) {
        font-size: 24px;
    }
    @media (max-width: 576px) {
        display: none;
    }
`;

const Header = () => {
    const { hash: { handleHash } } = useContext(Context);

    const handleShowChat = chat => {
        handleHash(chat);
    };

    return (
        <HeadContainer>
            <AuthButton/>
            <WorkBtn onClick={() => handleShowChat('Work')}>Work</WorkBtn>
            <ChatHeader> PlanctonicsChat </ChatHeader>
            <FloodBtn onClick={() => handleShowChat('Flood')}>Flood</FloodBtn>
        </HeadContainer>
    );
};
export default Header;