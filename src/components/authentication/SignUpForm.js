import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {
    emailChanged,
    passwordChanged,
    usernameChanged,
    createUser
} from '../../actions/authentication/Auth'
import {
    Input,
    Button,
    Spinner
} from '../common'
import { styles } from './Auth.styles'


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
        };
    }

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onUsernameChange(text) {
        this.props.usernameChanged(text)
    }

    onButtonPress() {
        const { username } = this.props

        this.props.createUser(this.state.email, this.state.password, {
            username
        })
    }
    
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Create user
            </Button>
        )
    }

    render() {
        const {
            viewContainer,
            errorText,
            signUpContainer,
            signUpinputStyle,
            signUpButtonContainer,
            signUpButtonView,
        } = styles
        return (
            <View style={viewContainer}>
            <View style={signUpContainer}>
                <View style={signUpinputStyle}>
                    <Input
                        label="Email"
                        placeholder="Enter your e-mail address"
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    />
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    />
                    <Input
                        label="Username"
                        placeholder="username"
                        onChangeText={(value) => this.setState({ username: value })}
                        value={this.state.username}
                    />
                    <Text style={errorText}>
                        {this.props.error}
                    </Text>
                </View>
                <View style={signUpButtonContainer}>
                    <View style={signUpButtonView}>
                        {this.renderButton()}
                    </View>
                </View>
            </View>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }, state) => {
    const { email, password, error, loading } = auth
    const { username } = state.user

    return { email, password, username, error, loading }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, usernameChanged, createUser
})(SignUpForm)