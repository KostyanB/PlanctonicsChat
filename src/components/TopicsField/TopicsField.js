import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { ChatField, FieldHeader, FieldListWrap } from '../Global/ChatFieldsElems';
import { Warning } from '../Global/Warning';
import TopicList from './TopicList';

const Topics = styled(ChatField)`
        -ms-grid-column: 2;
    grid-column: 2;
    -ms-grid-row: 2;
    grid-row: 2;
    background-color: #60bcf1;
    color: #034a72;
    /* padding-left: 10px; */
    border-right: 2px solid #60bcf1;

    @media (max-width: 576px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        -ms-grid-row: 3;
        grid-row: 3;
    }
`;

const TopicsField = () => {
    const { authUser: { authStatus },
        hash: { hash }
    } = useContext(Context);

    return (
        <Topics>
            {
                (authStatus) ?
                    <>
                    <FieldHeader>Чат "{hash}"</FieldHeader>
                    <FieldListWrap>
                        <TopicList/>
                    </FieldListWrap>
                    </> :
                    <Warning>Вы не авторизованы для участия в чате</Warning>
            }
        </Topics>
    );
}
export default TopicsField;
