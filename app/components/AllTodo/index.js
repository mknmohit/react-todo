import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoTable from 'components/TodoTable';

// import Styled from './style';

function AllTodo({ index, activeTab, todoData, handldeTodoActions }) {

  console.log('all', todoData)
  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      <TodoTable todoData={todoData} handldeTodoActions={handldeTodoActions} />
    </div>
  );
}

AllTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
  handldeTodoActions: PropTypes.func,
};

export default AllTodo;
