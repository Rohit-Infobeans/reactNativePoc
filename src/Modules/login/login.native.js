import React from 'react';

import { Actions } from 'react-native-router-flux';
import Login from './index';

class Loginmodule extends React.Component {
    constructor() {
        super();
    }

    handleSubmit() {
        Actions.drawer();
        return;
        if (this.refs.login) {
            this.refs.login.loginCall(response => {
                Actions.drawer();
            }, err => {
                console.log(err);
            });
        }
    }

    render() {
        return (
            <Login ref="login" handleSubmit={this.handleSubmit.bind(this)} submitText={'Login'} />
        )
    }
}
export default Loginmodule;


