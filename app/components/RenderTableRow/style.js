import styled, { css } from 'styled-components';
import { TableCell } from '@material-ui/core';

const Cell = styled(TableCell)`

  cursor: pointer;

  ${props =>
    props.strikeout &&
    css`
      text-decoration: line-through;
    `}
`;

export default {
  Cell,
};
