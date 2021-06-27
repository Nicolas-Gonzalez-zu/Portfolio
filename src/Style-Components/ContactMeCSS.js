import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';

export const CntForm = styled.div`
  padding: 2em;
  position: relative;
  height: 26em;
`;

export const ButtonValidated = styled.button`
  width: 6em;
  height: 2em;
  position: absolute;
  bottom: 0;
  right: 2.4em;

  background-color: #4eaed0;
  color: #fffaff;

  &:hover {
    cursor: not-allowed;
  }
`;

export const Button = styled(ButtonValidated)`
  background-color: #30bced;
  color: #fffaff;
  &:hover {
    cursor: pointer;
  }
`;

export const InputCSS = withStyles({
  underline: {
    '&:after': {
      borderBottomColor: '#30BCED',
    },
    '&:before': {
      borderBottomColor: '#30BCED',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #30BCED',
    },
  },
  input: {
    '&::placeholder': {
      color: '#30BCED',
    },
  },
  root: {
    fontSize: '1em',
    color: '#fffaff',
  },
})(Input);

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  background: rgba(48, 48, 54);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-top: 5em;
  margin-bottom: 5em;
  width: 80%;
  height: 100%;
  padding-left: 4em;
  padding-right: 4em;
`;

export const Title = styled.div`
  align-self: center;

  color: #fffaff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
  color: #30bced;
  font-size: 2em;
  font-weight: bold;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
