import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import AllTodo from 'components/AllTodo';
import PendingTodo from 'components/PendingTodo';
import CompletedTodo from 'components/CompletedTodo';

// import Styled from './style';

function TodoTabs({ todoData, handldeTodoActions, searchKeyword }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, tabValue) => {
    setActiveTab(tabValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All" value={0} />
          <Tab label="Pending" value={1} />
          <Tab label="Completed" value={2} />
        </Tabs>
      </AppBar>
      <AllTodo
        index={0}
        activeTab={activeTab}
        todoData={todoData}
        handldeTodoActions={handldeTodoActions}
        searchKeyword={searchKeyword}
      />
      <PendingTodo
        index={1}
        activeTab={activeTab}
        todoData={todoData}
        handldeTodoActions={handldeTodoActions}
        searchKeyword={searchKeyword}
      />
      <CompletedTodo
        index={2}
        activeTab={activeTab}
        todoData={todoData}
        handldeTodoActions={handldeTodoActions}
        searchKeyword={searchKeyword}
      />
    </div>
  );
}

TodoTabs.propTypes = {
  todoData: PropTypes.array,
  handldeTodoActions: PropTypes.func,
  searchKeyword: PropTypes.string,
};

export default TodoTabs;
