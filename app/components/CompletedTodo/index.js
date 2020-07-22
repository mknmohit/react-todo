/**
 *
 * Button
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import Styled from './style';

function CompletedTodo({ index, activeTab, todoData }) {

  return (
    <div role="tabpanel" hidden={index !== activeTab}>
      3
    </div>
  );
}

CompletedTodo.propTypes = {
  index: PropTypes.number,
  activeTab: PropTypes.number,
  todoData: PropTypes.array,
};

export default CompletedTodo;
