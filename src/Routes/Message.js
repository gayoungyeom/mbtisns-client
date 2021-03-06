import React from 'react';
import styled from 'styled-components';
import MessageLink from '../Components/MessageLink';

const Container = styled.div`
    margin-top: 100px;
`;

const Title = styled.div`
    color: #614638;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

class App extends React.Component {
    render() {
        return(
            <Container>
                <Title>✉</Title>
                <MessageLink />
                <MessageLink />
                <MessageLink />
                <MessageLink />
                <MessageLink />
            </Container>
        );
    }
}

export default App;