import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import TodoTable from 'components/TodoTable';

// import Styled from './style';

function AllTodo({ index, activeTab, todoData, handldeTodoActions }) {
  const getAlltodos = () =>
    map(todoData, item => {
      const { currentState } = item;
      if (currentState === 'completed' || currentState === 'completing') {
        return {
          ...item,
          isStrikeOutText: 1,
        };
      }
      return item;
    });

  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      <TodoTable
        todoData={getAlltodos()}
        handldeTodoActions={handldeTodoActions}
      />
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
