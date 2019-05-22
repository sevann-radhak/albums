import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp'

const AuthElements = function (props) {
    const loginButton = () => {
        if (props.user) return (

            [<Avatar src={props.user.providerData[0].photoURL} />,
            (<IconButton onClick={props.logout} color="inherit"> <ExitToApp /> </IconButton>)]

        );
        return (<Button variant="contained" onClick={props.login}>
            Log In
        </Button>);
    }

    return (
        <div className={props.classes.container}>
            {loginButton()}
        </div>
    );
}

export default withStyles({
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
})(AuthElements);