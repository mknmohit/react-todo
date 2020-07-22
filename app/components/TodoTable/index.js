/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import getTimestamp from 'utils/timestamp';
import { PRIORITY as getPriority } from 'containers/App/constants';

// import Styled from './style';

function TodoTable({ todoData }) {

  const renderTableData = () => {
    return map(todoData, item => {
      const { title, dueDate, priority, createdAt, currentState} = item
      return (
        <TableRow key={createdAt}>
          <TableCell component="th" scope="row">{title}</TableCell>
          <TableCell align="right">{getPriority[priority]}</TableCell>
          <TableCell align="right">{getTimestamp(createdAt)}</TableCell>
          <TableCell align="right">{dueDate}</TableCell>
          <TableCell align="right">action</TableCell>
        </TableRow>
      )
    })
  }

  console.log('table', todoData)
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Summary</TableCell>
            <TableCell align="right">Priority</TableCell>
            <TableCell align="right">Created On</TableCell>
            <TableCell align="right">Due By</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTableData()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TodoTable.propTypes = {
  todoData: PropTypes.array,
};

export default TodoTable;
