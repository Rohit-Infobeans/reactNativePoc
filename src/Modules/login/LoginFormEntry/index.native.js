import React from 'react';
import {View, TextInput} from 'react-native';

export default class LoginFormEntry extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}> 
                <View style={{borderBottomWidth: 1, paddingBottom: 5}}>
                    <TextInput style={{height: 35}} autoCapitalize='none' autoCorrect={false} placeholder="Name" onChangeText={this.props.onChangeText.bind(this, "user_login")}/>
                </View>
                <View style={{borderBottomWidth: 1, paddingBottom: 5}}>
                    <TextInput secureTextEntry={true} style={{height: 35}} placeholder="Password" onChangeText={this.props.onChangeText.bind(this, "user_pass")}/>
                </View>
            </View>
        )
    }
}

LoginFormEntry.defaultProps = {
    onChangeText: (key, text) => {}
}