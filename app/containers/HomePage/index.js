/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import AddTodoBtn from 'components/AddTodoBtn';
import TaskModal from 'components/TaskModal';
import TodoTabs from 'components/TodoTabs';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
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

  const handleSaveTodo = data => {
    console.log(data)
    setTodoData([
      ...todoData,
      data
    ])
  }

  const handldeTodoActions = params => {
    const { action, id } = params

    switch(action) {
      case 'edit': {

      }
      
      case 'complete': {

      }

      case 'delte': {
        
      }
    }
  }

  return (
    <div>
      <AddTodoBtn handleModalOpen={handleModalOpen} />
      <TaskModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        onSave={handleSaveTodo}
      />
      <TodoTabs todoData={todoData} handldeTodoActions={handldeTodoActions} />
    </div>
  );
}
