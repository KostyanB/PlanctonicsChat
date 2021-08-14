import React from 'react';
import styled from 'styled-components';
import { Context } from './components/Functions/Context';
import { GlobalStyle } from './components/Global/GlobalStyle';
import { ChatContainer } from './components/Global/ChatContainer';
import { Warning } from './components/Global/Warning';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UsersField from './components/UsersField/UsersField';
import TopicsField from './components/TopicsField/TopicsField';
import { useAuth } from './components/Hooks/useAuth';
import { useUserList } from './components/Hooks/useUserList';
import { useGetFloodList } from './components/Hooks/useGetFloodList';
import { useGetWorkList } from './components/Hooks/useGetWorkList';
import { useHash } from './components/Hooks/useHash';

const StartWarn = styled(Warning)`
  -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
  -ms-grid-row: 2;
    grid-row: 2;
  @media (max-width: 576px) {
    -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
    -ms-grid-row: 2;
      -ms-grid-row-span: 2;
      grid-row: 2/4;
    }
`;

function App() {

  const authUser = useAuth(),
    listUser = useUserList(),
    floodList = useGetFloodList(),
    workList = useGetWorkList(),
    hash = useHash();

  return (
    <Context.Provider value={{
      authUser,
      listUser,
      workList,
      floodList,
      hash,
    }}>
    <GlobalStyle/>
    <ChatContainer>
        <Header/>
        { (authUser.userName === 'Кто здесь?') ?
          <StartWarn>Кто здесь? Представьтесь, чтобы видеть сообщения в чатах.</StartWarn> :
          <>
            <UsersField/>
            <TopicsField/>
          </>
        }
        <Footer/>
      </ChatContainer>
    </Context.Provider>
  );
}
export default App;
