import styled from 'styled-components';

export const ChatField = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    overflow: hidden;
    position: relative;
`;

export const FieldHeader = styled.h2`
    padding: 5px 0;
    font-size: 24px;
    font-weight: 600;
    @media (max-height: 576px) {
        display: none;
    }
`;

export const FieldListWrap = styled.div`
    overflow: hidden;
    padding-bottom: 5px;
    width: 100%;
    height: 100%;
`;

export const  FieldList = styled.ul`
    height: 100%;
    overflow-y: auto;
    padding: 5px;
    word-wrap: break-word;
    ::-webkit-scrollbar {
    width: 15px;
    }
`;

export const Li = styled.li`
    margin-bottom: 10px;
    font-size: 20px;
    :last-of-type {
        margin-bottom: 0;
    }
`;
