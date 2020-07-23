import React from 'react';
import PropTypes from 'prop-types';
import { filter, isEmpty, map, replace } from 'lodash';
import TodoTable from 'components/TodoTable';

// import Styled from './style';

function AllTodo({ index, activeTab, todoData, handldeTodoActions, searchKeyword }) {

  const generateTodo = todo => {
    const { currentState } = todo;
    if (currentState === 'completed' || currentState === 'completing') {
      return {
        ...todo,
        isStrikeOutText: 1,
      };
    }
    return todo;
  }

  const getAlltodos = () => {
    if (!isEmpty(searchKeyword)) {
      return filter(todoData, item => {
        const { title, description } = item
        const string = replace(searchKeyword, /[' ']/g, '|')
        const pattern = new RegExp(string, 'i')
        const searchTitle = title.search(pattern)
        const searchDescription = description.search(pattern)
        if(searchTitle !== -1 || searchDescription !== -1) {
          return generateTodo(item)
        }
        return null
      })
    }
    return map(todoData, item => {
      return generateTodo(item)
    })
  }
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
  searchKeyword: PropTypes.string,
};

export default AllTodo;
