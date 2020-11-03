import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BoardNav from '../Components/BoardNav';
import Poster from '../Components/Poster';

const Container = styled.div`
    margin-left: 10vw;
`;

class App extends React.Component {
    render() {
        return(
            <>
            <BoardNav />
            <Container>
                <Poster />
                <Poster />
                <Poster />
                <Poster />
                <Poster />

            </Container>
            </>
        );
    }
}

export default App;