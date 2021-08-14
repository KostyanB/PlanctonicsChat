import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { Button } from '../Global/Button';
import { setWorkStorage, setFloodStorage } from '../Functions/handleStorage';
import sendBtn from '../../img/send.png';
import hovBtn from '../../img/send1.png';
import disBtn from '../../img/send2.png';

const FootContainer = styled.div`
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
    -ms-grid-row: 3;
    grid-row: 3;
    background-color: #bcfde7;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 5px;

    @media (max-width: 576px) {
    -ms-grid-row: 4;
    grid-row: 4;
    }
`;
const TopicInput = styled.textarea`
    background-color: #61ffca;
    padding: 5px;
    cursor: pointer;
    height: 90px;
    width: 80%;
    overflow-y: auto;
    resize: none;
    margin-right: 20px;
    font-size: 24px;
    color: #07583d;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #19c48b;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track {
        background-color: #61ffca;
    }

    @media (max-width: 576px) {
        margin-right: 10px;
        font-size: 20px;
    }
    @media (max-width: 576px), (max-height: 576px) {
        height: 50px;
    }
    @media (max-width: 320px) {
        width: 90%;
    }
`;
const BtnSend = styled(Button)`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-image: url(${sendBtn});
    background-position: center;
    background-size: cover;
    :active {
        background-image: url(${hovBtn});
    }
    :disabled {
        background-image: url(${disBtn});
    }
    @media (max-height: 576px), (max-width: 576px) {
        width: 50px;
        height: 50px;
    }
`;

const Footer = () => {
    const { hash: { hash },
        authUser: { userName, authStatus },
        workList: { workList, setWorkList },
        floodList: { floodList, setFloodList },
    } = useContext(Context);

    const inputRef = useRef(null);

    const addMessage = () => {
        const list = (hash === 'Work') ? workList : floodList,
            newText = inputRef.current.value,
            newId = String(+list[list.length - 1].id + 1),
            newList = [...list, {id: newId, name: userName, comment: newText, edit: 'false'}];

        // (hash === 'Work') ? setWorkList(newList) : setFloodList(newList);
        if (hash === 'Work') {
            setWorkList(newList);
            setWorkStorage(newList);
        } else {
            setFloodList(newList);
            setFloodStorage(newList);
        }
    };

    return (
        <FootContainer>
            <TopicInput ref={inputRef} placeholder="Найдется что сказать?" cols="30" rows="5"
					maxlength="300"/>
            <BtnSend disabled={!authStatus} onClick={addMessage}/>
        </FootContainer>
    );
}
export default Footer;