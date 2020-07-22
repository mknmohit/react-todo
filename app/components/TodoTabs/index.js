/**
 *
 * Button
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab } from '@material-ui/core';
import AllTodo from 'components/AllTodo';
import PendingTodo from 'components/PendingTodo';
import CompletedTodo from 'components/CompletedTodo';

// import Styled from './style';

function TodoTabs({ todoData }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, tabValue) => {
    setActiveTab(tabValue)
  }

  return (
    <div>
      <Paper>
        <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab label="All" value={0} />
          <Tab label="Pending" value={1} />
          <Tab label="Completed" value={2} />
        </Tabs>
      </Paper>
      <AllTodo index={0} activeTab={activeTab} todoData={todoData} />
      <PendingTodo index={1} activeTab={activeTab} todoData={todoData} />
      <CompletedTodo index={2} activeTab={activeTab} todoData={todoData} />
    </div>
  );
}

TodoTabs.propTypes = {
  todoData: PropTypes.array,
};

export default TodoTabs;
