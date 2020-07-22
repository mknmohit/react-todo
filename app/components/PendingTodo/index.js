import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash';
import TodoTable from 'components/TodoTable';

// import Styled from './style';

function PendingTodo({ index, activeTab, todoData, handldeTodoActions }) {

  const getPendigTodos = () => {
   return filter(todoData, { currentState: 'pending'}) 
  }

  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      <TodoTable todoData={getPendigTodos()} handldeTodoActions={handldeTodoActions} />
    </div>
  );
}

PendingTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
  handldeTodoActions: PropTypes.func,
};

export default PendingTodo;
