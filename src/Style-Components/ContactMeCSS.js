import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';

export const CntContactMe = styled.div`
  display: flex;
`;

export const CntSocials = styled.div`
  padding: 2em;
  height: 26em;
  flex: 1;
`;

export const CntForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2em;
  position: relative;
  height: 26em;
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
`;

export const LI = styled.li`
  list-style: none;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 10vw;
    transform: translate(-50%, calc(-50% + 150px));
    pointer-events: none;
    font-weight: 700px;
    transition: 0.5s;
    opacity: 0;
  }
  &:hover::before {
    opacity: 0.1;
    transform: translate(-50%, calc(-50% + 150px));
  }
`;

export const A = styled.a`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  background: #30bced;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 20px;
  font-size: 4em;

  transform-style: preserve-3d;
  perspective: 500px;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
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
      transform: scale(1.3) translateZ(50px);
    }
  }
`;

export const LinkedIn = styled(A)`
  &:hover {
    background: #0077b5;
    i {
      transform: scale(1.3) translateZ(50px);
    }
  }
`;

export const Gmail = styled(A)`
  &:hover {
    background: #dd4b39;
    i {
      transform: scale(1.3) translateZ(50px);
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
