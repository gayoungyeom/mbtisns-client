import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 100px;
    margin-left: 10vw;
`;

const List = styled.ul`
    display: flex;
    width: 30vw;
    position: relative;
`;

const Item = styled.li`
    // border-bottom: 3px solid;
    ${props => console.log(props)};
`;

const SLink = styled(Link)`
    margin: 0 15px;
    font-size: 30px;
    font-weight: bold;
    color: #614638;
    text-decoration: none;
    :hover{
            text-decoration: underline;
        }
`;

const Stick = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #614638;
`;

const Create = styled(Link)`
    position: absolute;
    top: 100px;
    left: 1250px;
    width: 34px;
    height: 34px;
    font-size: 30px;
    font-weight: bold;
    color: #614638;
    text-decoration: none;
    text-align: center;
    // border: 2px solid #614638;
    // border-radius: 20px;
`;

const Dm = styled(Link)`
    position: absolute;
    top: 100px;
    left: 1310px;
    width: 34px;
    height: 34px;
    font-size: 30px;
    // font-weight: bold;
    color: #614638;
    text-decoration: none;
    text-align: center;
`;

export default withRouter(({to}) => (
    <Container>
        <List>
            {/* 유저 mbti 타입 가져오기 */}
            <SLink to="/mbti">ISTJ</SLink>
            <Stick>|</Stick>
            <SLink to="/all">All</SLink>
        </List>
            <Create to="/create">🖋</Create>
            <Dm to="/message">✉</Dm>
    </Container>
));