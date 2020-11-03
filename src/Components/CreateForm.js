import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 100px;
    text-align: center; 
`;

const Div = styled.div`
  text-align: left;
  margin-left: 20%;
`;

const Select = styled.select`
    border-color: #614638;
    font-size: 14px;
`;

const Option = styled.option``;

const Form = styled.form``;

const TInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #614638;
  width: 60%;
  display: block;
  margin: 0 auto;
  text-align: left;
  margin-top: 4vh;
  font-size: 24px;
  :focus{
      outline: none;
  }
`;


const CInput = styled.textarea`
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #614638;
  border-width: 2px;
  width: 60%;
  height: 420px;
  resize: none;
  display: block;
  margin: 15px auto;
  text-align: left;
  font-size: 16px;
  :focus{
    outline: none;
  }
  &::-webkit-scrollbar{
    display: none !important;
}
`;

const Button = styled.button`
  margin-top: 2vh;
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
   <Div>
     <Select>
       <Option selected>category</Option>
       <Option value="MBTI">MBTI</Option>
       <Option value="ALL">ALL</Option>
     </Select>
   </Div>
   <Form>
    <TInput type="text" placeholder="제목 입력" required></TInput>
    <CInput type="text" placeholder="내용입력"></CInput>
    <Button>Save</Button>
   </Form>
 </Container>
);