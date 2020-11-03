import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 32px;
    width: 260px;
    height: 300px;
    border-radius: 4px;
    display: inline-flex;
    margin-right: 50px;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);
`;

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

const Image = styled.div`
    width: 100%;
    height: 200px;
    // height: 60vh;
    background-color: #FDECE3;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const Content = styled.div``;

const Author = styled.span`
    position: absolute;
    top: 92%;
    left: 2%;
`;

const Like = styled.span`
    position: absolute;
    top: 92%;
    left: 80%;
    font-size: 14px;
`;


export default() => (
    <Container>
        <PostContainer>
            <Image></Image>
            <Title>제목</Title>
            <Content></Content>
            <Author>author</Author>
            <Like>❤ 103</Like>
        </PostContainer>
    </Container>
);