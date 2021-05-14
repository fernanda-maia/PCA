import {Switch, Route} from 'react-router-dom';

import Home from '../../views/Home';
import Course from '../../views/Course';
import Account from '../../views/Account';
import Lessons from '../../views/Lessons';
import LogOut from '../../views/LogOut';
import Settings from '../../views/Settings';
import Classroom from '../../views/Classroom';
import Activities from '../../views/Activities';
import NotFound from '../../views/NotFound';

export default function  Content(props) {

    return (
            <Switch>
                <Route exact path='/' component = {Home} />

                <Route exact path='/course/' component = {Course} />

                <Route path='/account' component = {Account} />

                <Route exact path='/lessons/' component = {Lessons} />
                  
                <Route path='/logout' component = {LogOut} />

                <Route path='/login' component = {LogOut} />
                    
                <Route path='/settings' component = {Settings} />
                
                <Route path='/course/:id' component = {Classroom} />

                <Route path='/lessons/:id' component = {Activities} />

                <Route path='*' component = {NotFound} />   
            </ Switch>
    );
}