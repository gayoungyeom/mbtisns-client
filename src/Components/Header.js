import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    background-color: #614638;
    // opacity: 0.8;
    color: #614638;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    // box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    display: flex;
    margin-left: 140px;
`;

const LLink = styled(Link)`
    margin-left: 30px;
    text-decoration: none;
    color: white;
    font-size: 18px;
`;

const RLink = styled.span`
    margin-left: 60vw; 
    text-decoration: none;
`;

export default() => (
    <Header>
        <List>
            <Item>
                <LLink to="/mbti">MBTI SNS</LLink>
                <RLink>
                    {/* 로그아웃 상태 */}
                    <LLink to="/login">Login</LLink>
                    <LLink to="/signup">Signup</LLink>
                    {/* 로그인 상태 */}
                    {/* <LLink to="/logout">Logout</LLink>
                    <LLink to="/mypage">Mypage</LLink> */}
                </RLink>
            </Item>
        </List>
    </Header>
);