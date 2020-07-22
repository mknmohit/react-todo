import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import RenderTableRow from 'components/RenderTableRow';

// import Styled from './style';

function TodoTable({ todoData, handldeTodoActions }) {

  const renderTableData = () => {
    return map(todoData, items => {
      const { createdAt } = items
      return (
        <RenderTableRow
          key={createdAt}
          todoList={items}
          handldeTodoActions={handldeTodoActions}
        />
      )
    })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Summary</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell align="center">Created On</TableCell>
            <TableCell align="center">Due By</TableCell>
            <TableCell align="center">Action</TableCell>
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
  handldeTodoActions: PropTypes.func,
};

export default TodoTable;
