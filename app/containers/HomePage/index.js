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
  const [todoData, setTodoData] = useState([]);


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

  return (
    <div>
      <AddTodoBtn handleModalOpen={handleModalOpen} />
      <TaskModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        onSave={handleSaveTodo}
      />
      <TodoTabs todoData={todoData} />
    </div>
  );
}
