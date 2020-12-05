import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, SIGN_IN } from '../queries/queries';

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
    width: 220px;
    display: block;
    margin: 0 auto;
    text-align: left;
    margin-top: 35px;
    font-size: 16px;
    :focus{
        outline: none;
    }
`;

const Button = styled.button`
    margin-top: 30px;
    color: #614638;
    background-color: white;
    border-radius: 5px;
    border-color: #614638;
    outline: 0;
    font-size: 20px;
    cursor: pointer;
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [isUpdated, setIsUpdated] = useState(false);
    
    const [succeedLogIn, setSucceedLogIn] = useState(false);
    const [userid, setUserId] = useState('');
    const [usermbti, setUserMbti] = useState('');

    const [signin, {data, loading, error}] = useMutation(SIGN_IN)
    
    const onLogInBtnClick = () => {
        signin({variables: {email: email, password: password}})
        .then((res) => {
            const {data} = res;
            console.log(data);
            
            if(data && data.signin && data.signin.ok) { //로그인 성공
                setUserId(data.signin.user.id);
                setUserMbti(data.signin.user.mbtiType);
                setSucceedLogIn(true);
                console.log("로그인 성공");
                return;       
            } else{
                alert("로그인 실패");
            }
        });    
    };

    if(succeedLogIn) {
        // return <Redirect to={`/mbti/${userid}`} />
        return <Redirect to={`/mbti/${usermbti}`} />
    }
    
    // const userID = data.signin.user.id;
    // const {data: getUserData, loading: getUserLoading, error: getUserError} = useQuery(GET_USER, {variables: {id: 1}});
    // if (getUserLoading || getUserError) return <div>loading...</div>;

    // if(getUserData.getUser.ok) {
    //     const { user: getUserProfile } = getUserData.getUser;
    //     // console.log(getUserProfile);
    //     if(!isUpdated) {
    //         setIsUpdated(true);
    //         setFirstName(getUserProfile.firstName);
    //         setLastName(getUserProfile.lastName);
    //     }
    // }
    
    return(
        <Container>
        <Title>Log In</Title>
        <Form>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} autocomplete="current-password" placeholder="이메일을 입력하세요"></Input>            
            <Input type="password" onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" placeholder="비밀번호를 입력하세요"></Input>
            <Button onClick={() => onLogInBtnClick()}>login</Button>
        </Form>
        </Container>
    );
}

export default LoginForm;