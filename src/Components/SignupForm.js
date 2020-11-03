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
    width: 250px;
    display: block;
    margin: 0 auto;
    text-align: left;
    margin-top: 3vh;
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

const Div = styled.div``;

const Select = styled.select`
    border-top: none;
    border-left: none;
    border-right: none;
    border-width: 2px;
    border-color: #614638;
    width: 255px;
    margin-top: 3vh;
    font-size: 16px;
    color: gray;
`;

const Option = styled.option``;

export default() => (
 <Container>
     <Title>Sign Up</Title>
     <Form>
         <Input type="text" placeholder="이름을 입력하세요"></Input>
         <Input type="text" placeholder="이메일을 입력하세요"></Input>
         <Input type="password" placeholder="비밀번호를 입력하세요"></Input>
         <Input type="password" placeholder="비밀번호를 다시 한 번 입력하세요"></Input>
         <Input type="text" placeholder="핸드폰 번호를 입력하세요"></Input>  
         {/* <Input type="text" placeholder="MBTI 타입을 선택하세요"></Input> */}
         <Div>
             <Select>
                 <Option selected>MBTI 타입을 선택하세요</Option>
                 <Option value="ISTJ">ISTJ</Option>   
                 <Option value="ISTP">ISTP</Option>
                 <Option value="ISFJ">ISFJ</Option>
                 <Option value="ISFP">ISFP</Option>
                 <Option value="INTJ">INTJ</Option>
                 <Option value="INTP">INTP</Option>
                 <Option value="INFJ">INFJ</Option>
                 <Option value="INFP">INFP</Option>
                 <Option value="ESTJ">ESTJ</Option>   
                 <Option value="ESTP">ESTP</Option>
                 <Option value="ESFJ">ESFJ</Option>
                 <Option value="ESFP">ESFP</Option>
                 <Option value="ENTJ">ENTJ</Option>
                 <Option value="ENTP">ENTP</Option>
                 <Option value="ENFJ">ENFJ</Option>
                 <Option value="ENFP">ENFP</Option>
             </Select>
         </Div>
         {/* <Input type="text" placeholder="성별을 선택하세요"></Input> */}
         <Div>
             <Select>
                 <Option selected>성별을 선택하세요</Option>
                 <Option value="0">남</Option>   
                 <Option value="1">여</Option>
             </Select>
         </Div>
         <Input type="text" placeholder="닉네임을 입력하세요"></Input>
         <Button>signup</Button>
     </Form>
 </Container>
);