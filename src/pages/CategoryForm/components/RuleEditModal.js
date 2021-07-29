import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";
import {Box, Checkbox, FormControlLabel} from "@material-ui/core";

const RuleEditModal = (props) => {
    const {open, closeModal, saveRule, rule} = props;
    const [editedRule, setEditedRule] = useState(null);

    useEffect(() => {
        setEditedRule(rule);
    }, [rule])

    const handleClose = () => {
        closeModal();
    };

    const handleSave = () => {
        saveRule(editedRule);
    }

    const handleRuleChange = (event) => {
        setEditedRule({...editedRule, rule: event.target.value});
    }

    const handleIsExcludedChange = (event) => {
        setEditedRule({...editedRule, is_excluding: event.target.checked});
    }

    const handleIsActiveChange = (event) => {
        setEditedRule({...editedRule, is_active: event.target.checked});
    }

    const getExcludedCheckbox = () => <Checkbox checked={editedRule.is_excluding} onChange={handleIsExcludedChange}/>;
    const getActiveCheckbox = () => <Checkbox checked={editedRule.is_active} onChange={handleIsActiveChange}/>

    return (
        !!editedRule &&
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"md"} fullWidth>
            <DialogTitle id="form-dialog-title">Edit rule</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter rule subjects delimited by ";"
                </DialogContentText>
                <TextField
                    id="name"
                    label="Keywords"
                    type="text"
                    value={editedRule.rule}
                    onChange={handleRuleChange}
                    fullWidth
                />
                <Box>
                    <FormControlLabel control={getExcludedCheckbox()} label="Excluded" labelPlacement="start"/>
                    <FormControlLabel control={getActiveCheckbox()} label="Active" labelPlacement="start"/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

RuleEditModal.propTypes = {
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    saveRule: PropTypes.func.isRequired,
    rule: PropTypes.object,
};

export default RuleEditModal;