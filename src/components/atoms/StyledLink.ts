import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #FFFFFF;
    text-decoration: none;
  }
`;
