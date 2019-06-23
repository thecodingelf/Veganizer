import React, { Component } from 'react'
import {
  View,
  Platform,
  Text
} from 'react-native'

const instructions = Platform.select({
    ios: 'More features coming soon!',
    android: 'More features coming soon!',
  })
  

  class Main extends Component {
    
    render() {

        const {
            username
        } = this.props.users

        return (
            <View /*style={containerStyle}*/>
                <Text /*style={welcomeStyle}*/>
                    Welcome to Kawa Demo! {username}
                </Text>
                <Text /*style={instructionsStyle}*/>
                    To get started, create your river.
                </Text>
                <Text /*style={instructionsStyle}*/>
                    {instructions}
                </Text>
            </View>
        );
    }
}

export default Main