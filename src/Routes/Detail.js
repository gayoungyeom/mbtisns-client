import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BoardNav from '../Components/BoardNav';


const Container = styled.div`
    width: 50%;
    margin: 15px auto;
`;

const Title = styled.div`
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 26px;
`;

const Author = styled.div`
    font-size: 12px;
    text-align: right;
`;

const Content = styled.div`
    margin-top: 10px;
    font-size: 16px;
    height: 600px;
    background-color: #FDECE3;
`;

const CContainer = styled.div`
    margin-bottom: 30px;
`;

const Comment = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    font-size: 16px;
    :focus{
    outline: none;
    }
    &::-webkit-scrollbar{
    display: none !important;
    }
`;

class App extends React.Component {
    render() {
        return(
            <>
            <BoardNav />
            <Container>
                <Title>제목</Title>
                <Author>글쓴이</Author>
                <Content>내용</Content>

                <CContainer>
                    <Title>댓글</Title>
                    <Comment type="text" placeholder="댓글을 달아보세요"></Comment>
                </CContainer>
            </Container>
            </>
        );
    }
}

export default App;