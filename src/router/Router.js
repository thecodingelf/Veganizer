import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Loginform from '../components/authentication/LoginForm';
//import SignUpForm from '../components/authentication/SignUpForm';
//import ResetPassword from '../components/authentication/ResetPassword';
import Menu from '../components/menu/Menu';

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
{/*                     <Scene
                        key="signUp"
                        component={SignUpForm}
                    /> */}
{/*                     <Scene
                        key="resetPassword"
                        component={ResetPassword}
                    /> */}
                </Scene>
                <Scene key="main" hideNavBar>
                    <Scene
                        key="menu"
                        component={Menu}
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent