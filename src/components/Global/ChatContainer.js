import styled from 'styled-components';

export const ChatContainer = styled.div`
    width: 100vw;
        height: 100vh;
        display: -ms-grid;
        display: grid;
        -ms-grid-rows: 100px 1fr min-content;;
            grid-template-rows: 100px 1fr -webkit-min-content;;
            grid-template-rows: 100px 1fr min-content;;
        -ms-grid-columns: 200px 1fr;
            grid-template-columns: 200px 1fr;
        background-color: gray;

    @media (max-width: 576px) {
        -ms-grid-rows: 100px 150px 1fr min-content;
            grid-template-rows: 100px 150px 1fr -webkit-min-content;
            grid-template-rows: 100px 150px 1fr min-content;
    }
    @media (max-width: 576px) and (max-height: 576px) {
        -ms-grid-rows: 80px 80px 1fr min-content;
            grid-template-rows: 80px 80px 1fr -webkit-min-content;
            grid-template-rows: 80px 80px 1fr min-content;
    }
`;