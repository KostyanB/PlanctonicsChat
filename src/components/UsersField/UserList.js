import React, { useContext } from 'react';
import styled from 'styled-components';
import { FieldList, Li } from '../Global/ChatFieldsElems';
import { Context } from '../Functions/Context';

const List = styled(FieldList)`
    ::-webkit-scrollbar-thumb {
        background-color: #60bcf1;
        border-radius: 100px;
    }
`;
const UserLi =  (props) => <Li className={props.status}>{props.name}</Li>;

const UserList = () => {
    const {
        authUser: { userName },
        listUser: { userList },
    } = useContext(Context);

    return (
        <List>
            {(userList) && userList.filter(item => (item.name !== userName)).map(item =>
                <UserLi key={item.id} status={item.status} name={item.name}/>
            )}
        </List>
    );
};
export default UserList;
