/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { map, reject } from 'lodash';
import AddTodoBtn from 'components/AddTodoBtn';
import TaskModal from 'components/TaskModal';
import TodoTabs from 'components/TodoTabs';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [action, setAction] = useState('add');
  const [viewId, setViewId] = useState();
  const [todoData, setTodoData] = useState([{
    title: 'Sample todo tile',
    description: 'sample of todo description',
    dueDate: '2020-06-24',
    priority: 0,
    createdAt: 1595432275142,
    currentState: 'pending',
    isReadOnly: true,
  }]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddTodo = () => {
    setAction('add')
    handleModalOpen()
  }

  const handleSaveTodo = data => {
    setTodoData([
      ...todoData,
      data
    ])
  }

  const handleUpdateTodo = data => {
    const result = map(todoData, item => {
      const { createdAt } = item
      if(createdAt === viewId) {
        return data
      }
      return item
    })
    setTodoData(result)
  }

  const handldeTodoActions = params => {
    const { action: actionType, id } = params
    setAction(actionType)
    setViewId(id)

    if(actionType === 'complete') {
      const result = map(todoData, item => {
        const { createdAt } = item
        if(createdAt === id) {
          return {
            ...item,
            currentState: 'completed'
          }
        }
        return item
      })
      setTodoData(result)
    } else if(actionType === 'undoComplete') {
      const result = map(todoData, item => {
        const { createdAt } = item
        if(createdAt === id) {
          return {
            ...item,
            currentState: 'pending'
          }
        }
        return item
      })
      setTodoData(result)
    } else {
      handleModalOpen()
    }
  }
  
  const handleDeleteTodo = () => {
    const result = reject(todoData, { createdAt: viewId })
    setTodoData(result)
  }

  console.log('todoData', todoData)
  return (
    <div>
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
      <TodoTabs todoData={todoData} handldeTodoActions={handldeTodoActions} />
    </div>
  );
}
