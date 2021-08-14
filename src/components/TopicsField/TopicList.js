import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';
import { FieldList } from '../Global/ChatFieldsElems';
import TopicItem from './TopicItem';

const List = styled(FieldList)`
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar-thumb {
        background-color: #034a72;
        border-radius: 100px;
    }
`;

const TopicList = () => {

    const { hash: { hash },
        authUser: { userName },
        workList: { workList },
        floodList: { floodList }
    } = useContext(Context);

    const list = (hash === 'Work') ? workList : floodList;

    return (
        <List>
            {
                list?.map(item =>
                    <TopicItem key={item.id}
                        index={item.id}
                        name={item.name}
                        text={item.comment}
                        status={(item.name === userName) && "own"}
                        edited={item.edit}
                    />
                )
            }
        </List>
    );
};
export default TopicList;