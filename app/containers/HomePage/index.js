/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { isEmpty, map, reject } from 'lodash';
import { Typography } from '@material-ui/core';
import AddTodoBtn from 'components/AddTodoBtn';
import TaskModal from 'components/TaskModal';
import TodoTabs from 'components/TodoTabs';
import Search from 'components/Search';
import Styled from './style';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState('add');
  const [viewId, setViewId] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!isEmpty(todos)) {
      setTodoData(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoData));
  }, [todoData]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddTodo = () => {
    setAction('add');
    handleModalOpen();
  };

  const handleSaveTodo = data => {
    setTodoData([...todoData, data]);
  };

  const handleUpdateTodo = data => {
    const result = map(todoData, item => {
      const { createdAt } = item;
      if (createdAt === viewId) {
        return data;
      }
      return item;
    });
    setTodoData(result);
  };

  const handldeTodoActions = params => {
    const { action: actionType, id } = params;
    setAction(actionType);
    setViewId(id);

    if (actionType === 'complete') {
      const result = map(todoData, item => {
        const { createdAt } = item;
        if (createdAt === id) {
          return {
            ...item,
            currentState: 'completed',
          };
        }
        return item;
      });
      setTodoData(result);
    } else if (actionType === 'undoComplete') {
      const result = map(todoData, item => {
        const { createdAt } = item;
        if (createdAt === id) {
          return {
            ...item,
            currentState: 'pending',
          };
        }
        return item;
      });
      setTodoData(result);
    } else {
      handleModalOpen();
    }
  };

  const handleDeleteTodo = () => {
    const result = reject(todoData, { createdAt: viewId });
    setTodoData(result);
  };

  const handleSearchChange = value => {
    setSearchKeyword(value);
  };

  const onClearSearch = () => {
    setSearchKeyword('');
  };

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Wrapper>
          <Typography variant="h5">ToDo App</Typography>
          <Search
            searchKeyword={searchKeyword}
            onSearchChange={handleSearchChange}
            onClearSearch={onClearSearch}
          />
        </Styled.Wrapper>
        <AddTodoBtn handleAddTodo={handleAddTodo} />
        <TaskModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          onSave={handleSaveTodo}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
          allTodos={todoData}
          action={action}
          viewId={viewId}
        />
        <TodoTabs
          todoData={todoData}
          handldeTodoActions={handldeTodoActions}
          searchKeyword={searchKeyword}
        />
      </Styled.Container>
    </Styled.Root>
  );
}
