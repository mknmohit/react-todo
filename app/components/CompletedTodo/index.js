import React from 'react';
import PropTypes from 'prop-types';
import { filter } from 'lodash';
import TodoTable from 'components/TodoTable';

// import Styled from './style';

function CompletedTodo({ index, activeTab, todoData, handldeTodoActions }) {

  const getCompletedTodos = () => {
    return filter(todoData, { currentState: 'completed'}) 
   }
 
   return (
     <div role="tabpanel" hidden={index !== activeTab}>
       <TodoTable todoData={getCompletedTodos()} handldeTodoActions={handldeTodoActions} />
     </div>
   );
}

CompletedTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
  handldeTodoActions: PropTypes.func,
};

export default CompletedTodo;
