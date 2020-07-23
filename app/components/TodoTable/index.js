import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import RenderTableRow from 'components/RenderTableRow';
import { stableSort, getComparator } from 'utils/sorting';
import Styled from './style';

function TodoTable({ todoData, handldeTodoActions }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('createdAt');

  const headCells = [
    { id: 'title', label: 'Summary' },
    { id: 'priority', label: 'Priority' },
    { id: 'createdAt', label: 'Created On' },
    { id: 'dueDate', label: 'Due By' },
  ];

  const handleRequestSort = event => {
    const {
      target: { id },
    } = event;
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const renderTableData = () => {
    const sortedData = stableSort(todoData, getComparator(order, orderBy));
    return map(sortedData, items => {
      const { createdAt } = items;
      return (
        <RenderTableRow
          key={createdAt}
          todoList={items}
          handldeTodoActions={handldeTodoActions}
        />
      );
    });
  };

  const renderHeadCells = () =>
    map(headCells, headCell => {
      const { id, label } = headCell;
      return (
        <TableCell
          key={id}
          align="center"
          sortDirection={orderBy === id ? order : false}
        >
          <TableSortLabel
            active={orderBy === id}
            direction={orderBy === id ? order : 'asc'}
            id={id}
            onClick={handleRequestSort}
          >
            {label}
            {orderBy === id ? (
              <Styled.VisuallyHidden>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Styled.VisuallyHidden>
            ) : null}
          </TableSortLabel>
        </TableCell>
      );
    });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {renderHeadCells()}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderTableData()}</TableBody>
      </Table>
    </TableContainer>
  );
}

TodoTable.propTypes = {
  todoData: PropTypes.array,
  handldeTodoActions: PropTypes.func,
};

export default TodoTable;
