import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';

export const CntContactMe = styled.div`
  display: flex;
`;

export const CntSocials = styled.div`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const CntForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  position: relative;
`;

export const ButtonValidated = styled.button`
  width: 6em;
  height: 2em;
  margin-top: 1em;
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

export const UL = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const LI = styled.li`
  list-style: none;
  flex-shrink: 1;
  flex-grow: 1;
  width: 120px;
  height: 120px;
  margin: 1em;
  display: flex;
  justify-content: center;
`;

export const A = styled.a`
  position: relative;
  display: inline-block;
  width: 7.5rem;
  height: 7.5rem;
  background: #30bced;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 4em;

  transform-style: preserve-3d;
  perspective: 31.25rem;
  box-shadow: 0 1.5625rem 2.1875rem rgba(0, 0, 0, 0.1);
  transition: all 0.25s;
  i {
    transition: 0.25s;
    pointer-events: none;
  }
`;

export const GitHub = styled(A)`
  &:hover {
    background: #24292e;
    i {
      font-size: 1.3em;
      transform: translateZ(3.125rem);
    }
  }
`;

export const LinkedIn = styled(A)`
  &:hover {
    background: #0077b5;
    i {
      font-size: 1.3em;
      transform: translateZ(3.125rem);
    }
  }
`;

export const Gmail = styled(A)`
  &:hover {
    background: #dd4b39;
    i {
      font-size: 1.3em;
      transform: translateZ(3.125rem);
    }
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
      borderBottom: '0.125em solid #30BCED',
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
  font-size: 16px;
  color: white;

  background: rgba(48, 48, 54);
  box-shadow: 0rem 0.25em 0.25em rgba(0, 0, 0, 0.25), inset 0rem 0.25em 0.25em rgba(0, 0, 0, 0.25);

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
  text-shadow: 0rem 0.125em 0.25em rgba(0, 0, 0, 0.25);
`;
