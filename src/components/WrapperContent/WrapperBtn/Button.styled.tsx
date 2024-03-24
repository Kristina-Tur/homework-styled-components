import styled from 'styled-components';
import {myTheme} from '../../../styles/Theme.styled';

export const Button = styled.button`
         font-weight: 700;
         font-size: 10px;
         line-height: 200%;
         color: ${myTheme.colors.primary};
         background-color: ${myTheme.colors.button};
         border: 2px solid ${myTheme.colors.button};
         border-radius: 5px;
         padding: 5px 20px;
         cursor: pointer;
       `