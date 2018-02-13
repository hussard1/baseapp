import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

import AlertDialog from './AlertDialog';
import {Link} from "react-router-dom";

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            alertDialog: {
                open: false,
                title: '',
                description: ''
            }
        }
    }

    _handleChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    _onRegister = () => {
        this.setState({open: true});
        let {username, password} = this.state;

        this.props.onRegister(username, password)
            .then((response) => {
                this.setState({
                    username: '',
                    password: ''
                })
            })
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Grid container className={classes.root} justify='center'>
                    <Card className={classes.card}>
                        <CardContent className={classes.contents}>
                            <Typography className={classes.title}>
                                REGISTER
                            </Typography>
                            <TextField
                                className={classes.textField}
                                placeholder="Enter your Username"
                                label="Username"
                                onChange={this._handleChange}
                            />
                            <br/>
                            <TextField
                                className={classes.textField}
                                type="password"
                                placeholder="Enter your Password"
                                label="Password"
                                onChange={this._handleChange}
                            />
                        </CardContent>
                        <Grid container justify="space-between">
                            <CardActions className={classes.bottom}>
                                <Button component={Link} color="inherit" to="/login"> CANCEL </Button>
                            </CardActions>
                            <CardActions className={classes.bottom}>
                                <Button color="primary" onClick={this._onRegister}> CREATE </Button>
                            </CardActions>
                        </Grid>
                    </Card>
                </Grid>
                <AlertDialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    title={this.state.alertDialog.title}
                    description={this.state.alertDialog.description}
                />
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        minWidth: 275,
        textAlign: 'center',
        width: 400,
        marginTop: 50,
    },
    contents: {
        padding: 0,
        color: theme.palette.text.primary,
    },
    title: {
        fontSize: '1.7rem',
        padding: 20,
        color: 'white',
        backgroundColor: theme.palette.text.primary
    },
    textField: {
        width: '90%',
        marginTop: 30
    },
    bottom: {
        margin: 20
    }
});

export default withStyles(styles)(RegisterForm);
