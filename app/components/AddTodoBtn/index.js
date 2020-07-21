/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Tooltip } from '@material-ui/core';

import Styled from './style';

function AddTodoBtn({ handleModalOpen }) {

  return (
    <Styled.Root>
      <Tooltip title="Create New Todo">
      <Fab color="primary" onClick={handleModalOpen}>
        <AddIcon />
      </Fab>
    </Tooltip>
    </Styled.Root>
  );
}

AddTodoBtn.propTypes = {
  handleModalOpen: PropTypes.func,
};

export default AddTodoBtn;