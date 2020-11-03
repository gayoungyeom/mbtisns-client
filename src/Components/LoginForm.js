import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 21vh;
    text-align: center;
`;

const Title = styled.h1`
    color: #614638;
    font-size: 38px;
    font-weight: bold;
`;

const Form = styled.form``;

const Input = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: #614638;
    width: 220px;
    display: block;
    margin: 0 auto;
    text-align: left;
    margin-top: 4vh;
    font-size: 16px;
    :focus{
        outline: none;
    }
`;

const Button = styled.button`
    margin-top: 5vh;
    color: #614638;
    background-color: white;
    border-radius: 5px;
    border-color: #614638;
    outline: 0;
    font-size: 20px;
    cursor: pointer;
`;


export default() => (
 <Container>
     <Title>Log In</Title>
     <Form>
         <Input type="text" placeholder="이메일을 입력하세요"></Input>
         <Input type="password" placeholder="비밀번호를 입력하세요"></Input>
         <Button>login</Button>
     </Form>
 </Container>
);