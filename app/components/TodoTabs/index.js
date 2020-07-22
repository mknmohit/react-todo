/**
 *
 * Button
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab } from '@material-ui/core';

// import Styled from './style';

function TodoTabs({ todoData }) {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabChange = (event, tabValue) => {
    setActiveTab(tabValue)
  }

  return (
    <div>
      <Paper>
        <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab label="All" value={1} />
          <Tab label="Pending" value={2} />
          <Tab label="Completed" value={3} />
        </Tabs>
      </Paper>
      <div role="tabpanel" value={1} hidden={1 !== activeTab}>
        Item One
      </div>
      <div role="tabpanel" value={2} hidden={2 !== activeTab}>
        Item Two
      </div>
      <div role="tabpanel" value={3} hidden={3 !== activeTab}>
        Item Three
      </div>
     
    </div>
  );
}

TodoTabs.propTypes = {
  todoData: PropTypes.array,
};

export default TodoTabs;
