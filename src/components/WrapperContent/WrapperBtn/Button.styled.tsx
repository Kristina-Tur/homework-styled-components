import styled from 'styled-components';
import {myTheme} from '../../../styles/Theme.styled';


export const Button = styled.button`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 200%;
  border: 2px solid ${myTheme.colors.button};
  color: ${myTheme.colors.button};
  border-radius: 5px;
  background-color: transparent;
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${myTheme.colors.button};
    color: ${myTheme.colors.primary};
    transition: .5s;
  }
`
export const ButtonSave = styled(Button)`
  padding: 5px 30px;
`