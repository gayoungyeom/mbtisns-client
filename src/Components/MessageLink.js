import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5px auto;
    width: 1000px;
    height: 50px;
    border-radius: 2px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
    color: #614638;
`;

const SLink = styled(Link)`
    text-decoration: none;
    color: #614638;
`;

const Who = styled.div`
    font-size: 24px;
    display: inline-flex;
    width: 14%;
    margin-top: 13px;
    margin-left: 5px;
    font-weight: bold;
`;

const ShortContent = styled.div`
    font-size: 14px;
    display: inline-flex;
    width: 76%;
    margin-top: 13px;
    margin-left: 8px;
`;

const Date = styled.div`
    font-size: 14px;
    display: inline-flex;
    width: 5%;
    margin-top: 13px;
    margin-left: 8px;
    color: gray;
`;

export default() => (
    <Container>
        <SLink to="/msgdetail">
            <Who>닉네임</Who>
            <ShortContent>메세지 내용 ...</ShortContent>
            <Date>2일전</Date>
        </SLink>
    </Container>
);