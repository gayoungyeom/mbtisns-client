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
        // console.log(this.props);
        const mbtiType = this.props.location.pathname.slice(-4);
        console.log(mbtiType);
        return(
            <>
            <BoardNav mbtiType={ mbtiType }/>
            <Container>
                <Poster />
                <Poster />
            </Container>
            </>
        );
    }
}

export default App;