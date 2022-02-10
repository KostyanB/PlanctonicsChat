import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { Li } from '../Global/ChatFieldsElems';
import { Button } from '../Global/Button';
import { setWorkStorage, setFloodStorage } from '../Functions/handleStorage';
import delImg from '../../img/trash.png';
import editImg from '../../img/pencil.png';

const ItemWrap = styled(Li)`
    border-width: 1px;
    border-style: solid;
    border-color: #c8e9fa;
    border-radius: 5px;
    padding: 5px;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 50px;
    @media (max-width: 576px) {
        width: 100%;
    }

`;
const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
`;
const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`;
const ItemHead = styled.h3`
    font-size: 20px;
    font-style: italic;
`;
const ItemText = styled.p`
    font-size: 24px;
`;
const ItemInput = styled.input`
    font-size: 24px;
    background-color: transparent;
    color: #45f754;
`;
const ChatBtn = styled(Button)`
    width: 20px;
    height: 20px;
    background-color: transparent;
`;
const BtnDel = styled(ChatBtn)`
    background-image: url(${delImg});
    margin-left: 5px;
`;
const BtnEdit = styled(ChatBtn)`
    background-image: url(${editImg});
`;

const TopicItem = ({ index, name, text, status, edited }) => {

    const { authUser: { userName },
        workList: { workList, setWorkList },
        floodList: { floodList, setFloodList },
        hash: { hash }
    } = useContext(Context);

    const refDelBtn = useRef(null),
        refEditBtn = useRef(null);

    const list = (hash === 'Work') ? workList : floodList;

    const renderList = val => {
        // (hash === 'Work') ? setWorkList(val) : setFloodList(val);
        if (hash === 'Work') {
            setWorkList(val);
            setWorkStorage(val);
        } else {
            setFloodList(val);
            setFloodStorage(val);
        }
    }

    const deleteItem = index => {
        const newList = list.filter(item => index !== item.id);
        renderList(newList);
    };

    const toggleEdit = index => {
        const editedList = list.map(item => {
            if (item.id === index) item.edit = !item.edit;
            return item;
        });
        renderList(editedList);
    };

    const changeText = (index, e) => {
        const changeList = list.map(item => {
            if (item.id === index) item.comment = e.target.value;
            return item;
        });
        renderList(changeList);
    };

    return (
        <ItemWrap className={status}>
            <TextWrap >
                <ItemHead>{name}</ItemHead>
                {edited ?
                    <ItemText>{text}</ItemText> :
                    <ItemInput defaultValue={text} type="text"
                        onInput={e => changeText(index, e)}
                        onBlur={() => toggleEdit(index)}
                    />
                }
            </TextWrap>
            <BtnWrap>
                {(name === userName || userName === 'Moder') &&
                    <>
                    <BtnEdit ref={refEditBtn} onClick={() => toggleEdit(index)}/>
                    <BtnDel ref={refDelBtn} onClick={() => deleteItem(index)}/>
                    </>
                }
            </BtnWrap>
        </ItemWrap>
    )
}
export default TopicItem;