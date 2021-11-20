import {
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { v4 as uuidv4 } from 'uuid';
import { StyledLink } from '../atoms';

const MainDrawerList = function MainDrawerList(): React.ReactElement {
  const mainDrawerList = [
    {
      text: 'About',
      icon: <InfoOutlinedIcon />,
      path: '/about',
    },
    {
      text: 'Connect with me',
      icon: <ContactMailOutlinedIcon />,
      path: '/connect',
    },
  ];

  return (
    <List>
      {mainDrawerList.map((entry) => (
        <StyledLink to={entry.path} key={uuidv4()}>
          <ListItem button key={uuidv4()}>
            <ListItemIcon>{entry.icon}</ListItemIcon>
            <ListItemText primary={entry.text} />
          </ListItem>
        </StyledLink>
      ))}
    </List>
  );
};

export default MainDrawerList;
