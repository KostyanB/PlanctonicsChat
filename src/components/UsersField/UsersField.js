import React from 'react';
import styled from 'styled-components';
import { ChatField, FieldHeader, FieldListWrap } from '../Global/ChatFieldsElems';
import UserList from './UserList';

const Users = styled(ChatField)`
        -ms-grid-column: 1;
    grid-column: 1;
    -ms-grid-row: 2;
    grid-row: 2;
    background-color: #034a72;
    color: #60bcf1;
    padding-left: 10px;
    border-right: 2px solid #034a72;

    @media (max-width: 576px) {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2;
        grid-column: 1/3;
        -ms-grid-row: 2;
        grid-row: 2;
    }
`;

const UsersField = () => (
        <Users>
            <FieldHeader>Коллеги</FieldHeader>
            <FieldListWrap>
                <UserList/>
            </FieldListWrap>
        </Users>
)
export default UsersField;
