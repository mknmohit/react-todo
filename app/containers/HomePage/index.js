/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import AddTodoBtn from 'components/AddTodoBtn';
import TaskModal from 'components/TaskModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTodo = todoData => {
    console.log(todoData)
  }

  return (
    <div>
      <AddTodoBtn handleModalOpen={handleModalOpen} />
      <TaskModal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        onSave={handleSaveTodo}
      />
    </div>
  );
}
