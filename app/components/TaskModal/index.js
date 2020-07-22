import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,   
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slide,
  TextField,
} from '@material-ui/core';
import getTimestamp from 'utils/timestamp'
import { isEmpty, find } from 'lodash';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialTodoData = {
  title: '',
  description: '',
  dueDate: '',
  priority: 0,
  createdAt: '',
  currentState: 'pending',
  isReadOnly: false,
}

function TaskModal({ isModalOpen, handleModalClose, onSave, onUpdate, onDelete, allTodos, action, viewId}) {
  const [todoData, setTodoData] = useState(initialTodoData);

  useEffect(() => {

    if(isModalOpen && action !== 'add') {
      const todoList = find(allTodos, { createdAt: viewId })
      const result = {
        ...todoList,
        isReadOnly: action === 'edit' ? false : true,
      }
      setTodoData(result)
    }
  }, [isModalOpen])

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;
    setTodoData({
      ...todoData,
      [name]: value,
    });
  };

  const setInitialTodoData = () => {
    setTodoData(initialTodoData)
  }

  const handleSaveTodo = () => {
    const data = {
      ...todoData,
      isReadOnly: true,
      createdAt: new Date().getTime(),
    }
    onSave(data)
    setInitialTodoData()
    handleModalClose()
  }

  const handleUpdateTodo = () => {
    const data = {
      ...todoData,
      isReadOnly: true,
    }
    onUpdate(data)
    setInitialTodoData()
    handleModalClose()
  }

  const handleDeleteTodo = () => {
    onDelete()
    handleModalClose()
  }

  const onCloseModal = () => {
    setInitialTodoData()
    handleModalClose()
  }

  console.log('todoData', todoData)

  const renderSaveBtn = () => {
    switch(action) {
      case 'add': {
        return (
          <Button variant="contained" color="primary" onClick={handleSaveTodo}>
            Save
          </Button>
        )
      }

      case 'edit': {
        return (
          <Button variant="contained" color="primary" onClick={handleUpdateTodo}>
            Update
          </Button>
        )
      }

      case 'delete': {
        return (
          <Button variant="contained" color="secondary" onClick={handleDeleteTodo}>
            Yes
          </Button>
        )
      }
    }
  }

  const renderConfirmationBtn = () => {
    return (
      <div>
        <Button onClick={onCloseModal} variant="outlined" color="primary">
          {action === 'delete' ? 'No' : 'Cancel' }
        </Button>
        {renderSaveBtn()}
      </div>
    )
  }

  return (
    <Dialog
      onClose={onCloseModal}
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
          InputProps={{
            readOnly: todoData.isReadOnly,
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
          InputProps={{
            readOnly: todoData.isReadOnly,
          }}
          multiline
          fullWidth
        />
        <TextField
          label="Due Date"
          type="date"
          name="dueDate"
          defaultValue={getTimestamp(todoData.dueDate)}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: todoData.isReadOnly,
          }}
        />
        <FormControl>
          <InputLabel shrink id="priority-dropdown-label">
            Priority
          </InputLabel>
          <Select
            labelId="priority-dropdown-label"
            name="priority"
            value={todoData.priority}
            onChange={handleChange}
            inputProps={{ readOnly: todoData.isReadOnly }}
            displayEmpty
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Low</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={3}>High</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        {action === 'delete' && 'Do you want to delete it?'}
        {renderConfirmationBtn()}
      </DialogActions>
    </Dialog>
  );
}

TaskModal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
  onSave: PropTypes.func,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  allTodos: PropTypes.array,
  action: PropTypes.string,
  viewId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TaskModal;
