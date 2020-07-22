import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TableCell, TableRow, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import { PRIORITY as getPriority } from 'containers/App/constants';
import getTimestamp from 'utils/timestamp';

// import Styled from './style';

function RenderTableRow({ todoList, handldeTodoActions }) {
  const { title, dueDate, priority, createdAt, currentState} = todoList

  const handleEdit = () => {
    const params = {
      action: 'edit',
      id: createdAt,
    }
    handldeTodoActions(params)
  }

  const handleMarkDone = () => {
    const params = {
      action: 'complete',
      id: createdAt,
    }
    handldeTodoActions(params)
  }

  const handleDelete = () => {
    const params = {
      action: 'delete',
      id: createdAt,
    }
    handldeTodoActions(params)
  }

  const renderActions = () => {
    return (
      <div>
        <Tooltip title="Edit">
          <IconButton onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mark Done">
          <IconButton onClick={handleMarkDone}>
            <CheckIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    )
  }

  return (
    <TableRow key={createdAt}>
      <TableCell component="th" scope="row">{title}</TableCell>
      <TableCell align="center">{getPriority[priority]}</TableCell>
      <TableCell align="center">{getTimestamp(createdAt)}</TableCell>
      <TableCell align="center">{dueDate}</TableCell>
      <TableCell align="center">{renderActions()}</TableCell>
    </TableRow>
  );
}

RenderTableRow.propTypes = {
  todoList: PropTypes.object,
  handldeTodoActions: PropTypes.func,
};

export default RenderTableRow;
