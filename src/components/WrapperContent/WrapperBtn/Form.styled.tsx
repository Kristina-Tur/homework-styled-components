import styled from 'styled-components';
import {myTheme} from '../../../styles/Theme.styled';

export const Form = styled.form`
`

export const Input = styled.input`
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  color: ${myTheme.colors.button};
  background-color: ${myTheme.colors.primary};
  border: 2px solid ${myTheme.colors.button};
  border-radius: 5px;
  padding: 5px 30px;
  cursor: pointer;
`