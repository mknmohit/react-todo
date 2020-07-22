/**
 *
 * Button
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoTable from 'components/TodoTable';

// import Styled from './style';

function AllTodo({ index, activeTab, todoData }) {

  console.log('all', todoData)
  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      <TodoTable todoData={todoData} />
    </div>
  );
}

AllTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
};

export default AllTodo;
