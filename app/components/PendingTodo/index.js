import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import Styled from './style';

function PendingTodo({ index, activeTab, todoData }) {

  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      2
    </div>
  );
}

PendingTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
};

export default PendingTodo;
