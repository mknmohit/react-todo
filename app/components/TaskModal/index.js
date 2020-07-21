import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, Slide, TextField } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TaskModal({ isModalOpen, handleModalClose }) {

  const getDefaultTimestamp = () => {
    const timestamp = new Date()
    const day = timestamp.getDate()
    const month = timestamp.getMonth()
    const year = timestamp.getFullYear()
    return `${year}-${month < 10 ? '0'+month : month}-${day < 10 ? '0'+day : day}`
  }

  return (
    <Dialog onClose={handleModalClose} open={isModalOpen} TransitionComponent={Transition}>
      <DialogTitle>Create New Todo</DialogTitle>
      <DialogContent dividers>
        <TextField label="Summary" variant="outlined" fullWidth />
        <TextField label="Description" variant="outlined" rows={10} multiline fullWidth />
        <TextField
          label="Due Date"
          type="date"
          // onFocus={(e) => e.target.type='date'}
          defaultValue={getDefaultTimestamp()}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          value={0}
          // onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Medium</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TaskModal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
};

export default TaskModal;