import styled, { css } from 'styled-components';
import { TableCell } from '@material-ui/core';
import TickIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import RestoreIcon from '@material-ui/icons/Restore';
import { green, orange } from '@material-ui/core/colors';


const Cell = styled(TableCell)`
  cursor: pointer;

  ${props =>
    props.strikeout &&
    css`
      text-decoration: line-through;
      opacity: 0.7;
    `}
`;

const CheckIcon = styled(TickIcon)`
  color: ${green[500]};
`;

const UndoIcon = styled(RestoreIcon)`
  color: ${orange[500]};
`;

export default {
  Cell,
  CheckIcon,
  UndoIcon,
};
