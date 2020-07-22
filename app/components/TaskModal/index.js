import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Slide,
  TextField,
} from '@material-ui/core';
import getTimestamp from 'utils/timestamp'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TaskModal({ isModalOpen, handleModalClose, onSave }) {
  const [todoData, setTodoData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'None',
    createdAt: '',
    currentState: 'pending',
  });

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;
    setTodoData({
      ...todoData,
      [name]: value,
    });
  };

  const handleSaveTodo = () => {
    const data = {
      ...todoData,
      createdAt: new Date().getTime(),
    }
    onSave(data)
    handleModalClose()
  }

  const getDefaultTimestamp = () => {
    const timestamp = new Date();
    const day = timestamp.getDate();
    const month = timestamp.getMonth();
    const year = timestamp.getFullYear();
    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  };

  return (
    <Dialog
      onClose={handleModalClose}
      open={isModalOpen}
      TransitionComponent={Transition}
    >
      <DialogTitle>Create New Todo</DialogTitle>
      <DialogContent dividers>
        <TextField
          label="Summary"
          variant="outlined"
          name="title"
          value={todoData.title}
          onChange={handleChange}
          inputProps={{
            maxLength: 140,
          }}
          fullWidth
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={todoData.description}
          onChange={handleChange}
          rows={10}
          inputProps={{
            maxLength: 500,
          }}
          multiline
          fullWidth
        />
        <TextField
          label="Due Date"
          type="date"
          name="dueDate"
          defaultValue={getTimestamp()}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          name="priority"
          value={todoData.priority}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSaveTodo}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

TaskModal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
  onSave: PropTypes.func,
};

export default TaskModal;
