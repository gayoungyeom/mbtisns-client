import React, { useState } from 'react';
import styled from 'styled-components';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../queries/queries';

const Container = styled.div`
    // margin-top: 21vh;
    margin-top: 140px;
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
    margin-top: 25px;
    font-size: 16px;
    :focus{
        outline: none;
    }
`;

const Button = styled.button`
    margin-top: 35px;
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

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mbtiType, setMbtiType] = useState('');
    const [gender, setGender] = useState('');
    const [nickName, setNickName] = useState('');
    const [isVerified, setIsVerified] = useState('');

    const [signup, {data, loading, error}] = useMutation(SIGN_UP)

    const onSignupBtnClick = () => {
        signup({variables: {firstName: firstName, lastName: lastName, email: email, password: password, phoneNumber: phoneNumber, mbtiType: mbtiType, gender: gender, nickName: nickName, isVerified: true}})
        .then((res) => {
            const {data} = res;
            console.log(data);

            if(data && data.signup && data.signup.ok) {
                console.log("회원가입 성공");
                return;
            } else {
                console.log("회원가입 실패");
                return; 
            }
        })
        .catch((err) => console.log(err));
    };

    const mbtiHandler = (e) => {
        const selectOption = e.target;
        const val = selectOption.options[selectOption.selectedIndex].value;
        setMbtiType(val);
    }

    const genderHandler = (e) => {
        const selectOption = e.target;
        const val = selectOption.options[selectOption.selectedIndex].value;
        if(val === "0") setGender(false); //남
        else if(val === "1") setGender(true); //여
    }

    if (loading || error) return <div>loading...</div>;


    return(
        <Container>
            <Title>Sign Up</Title>
            <Form>
                <Input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="성을 입력하세요"></Input>
                <Input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="이름을 입력하세요"></Input>
                <Input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력하세요"></Input>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요"></Input>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 다시 한 번 입력하세요"></Input>
                <Input type="text" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="핸드폰 번호를 입력하세요"></Input>  
                <Div>
                    <Select onChange={(e) => mbtiHandler(e)}>
                        <Option>MBTI 타입을 선택하세요</Option>
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
                <Div>
                    <Select onChange={(e) => genderHandler(e)}>
                        <Option>성별을 선택하세요</Option>
                        <Option value="0">남</Option>   
                        <Option value="1">여</Option>
                    </Select>
                </Div>
                <Input type="text" onChange={(e) => setNickName(e.target.value)} placeholder="닉네임을 입력하세요"></Input>
                <Button onClick={() => onSignupBtnClick()}>signup</Button>
            </Form>
        </Container>
    );
}

export default SignupForm;