import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from 'prop-types';

class AlertDialog extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

AlertDialog.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};


export default AlertDialog;