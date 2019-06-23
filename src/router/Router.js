import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Loginform from '../components/authentication/LoginForm';
import SignUpForm from '../components/authentication/SignUpForm';
import ResetPassword from '../components/authentication/ResetPassword';
import Main from '../components/main/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        hideNavBar
                        key="login"
                        component={Loginform}
                        initial
                    />
                   <Scene
                        key="signUp"
                        component={SignUpForm}
                    />
                    <Scene
                        key="resetPassword"
                        component={ResetPassword}
                    />
                </Scene>
                <Scene key="menu" hideNavBar>
                    <Scene
                        key="main"
                        component={Main}
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent