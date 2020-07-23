import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, filter } from 'lodash';
import TodoTable from 'components/TodoTable';
import searching from 'utils/searching';

// import Styled from './style';

function CompletedTodo({
  index,
  activeTab,
  todoData,
  handldeTodoActions,
  searchKeyword,
}) {
  const generateTodo = todo => {
    const { currentState } = todo;
    if (currentState === 'completed') {
      return todo;
    }
    return null;
  };

  const getCompletedTodos = () => {
    if (!isEmpty(searchKeyword)) {
      return filter(todoData, item => {
        const isSearchingMatched = searching(item, searchKeyword);

        if (isSearchingMatched) {
          return generateTodo(item);
        }
        return null;
      });
    }
    return filter(todoData, item => generateTodo(item));
  };

  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      <TodoTable
        todoData={getCompletedTodos()}
        handldeTodoActions={handldeTodoActions}
      />
    </div>
  );
}

CompletedTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
  handldeTodoActions: PropTypes.func,
  searchKeyword: PropTypes.string,
};

export default CompletedTodo;
