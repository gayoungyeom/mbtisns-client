import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Login from '../Routes/LogIn';
import Signup from '../Routes/SignUp';
import Mbti from '../Routes/Mbti';
import All from '../Routes/All';
import Detail from '../Routes/Detail';
import CreatePost from '../Routes/CreatePost';
import Message from '../Routes/Message';
import MsgDetail from '../Routes/MsgDetail';
import Header from './Header';

export default() => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/mbti" component={Mbti} />
            <Route path="/all" component={All} />
            <Route path="/detail" component={Detail} />
            <Route path="/create" component={CreatePost} />
            <Route path="/message" component={Message} />
            <Route path="/msgdetail" component={MsgDetail} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)