import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Mbti from './Mbti';

const Container = styled.div`
    margin-top: 60px;
`;

const IntroContainer = styled.div`
    background-color: #FDECE3;
    height: 35vh;
    text-align: center;
`;

const Title = styled.div`
    color: #614638;
    font-size: 38px;
    font-weight: bold;
    padding-top: 50px;
`;

const Intro = styled.div`
    color: #614638;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
`;

const SLink = styled(Link)`
    color: #614638;
    font-size: 20px;
    text-decoration: none;
    // border: 1px solid #614638;
    // border-radius: 3px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    width: 1400px;
    height: 400px;
    margin: 0 auto;
`;


class App extends React.Component {
    render() {
        return(
            <Container>
                {/* 로그인 상태 */}
               {/* <Mbti /> */}

               {/* 로그아웃 상태 */}
               <IntroContainer>
                <Title>당신의 MBTI 타입은?</Title>
                <Intro>MBTI SNS는 나와 같은 성향을 가진 사람들을 만나 소통하는 공간입니다.</Intro>
                {/* 임시 이동루트  */}
                <SLink to="/mbti">게시판 바로가기💨</SLink>
               </IntroContainer>
                <Image bgUrl={require("../assets/mbti2.png")}/>

            </Container>
        );
    }
}

export default App;