/* eslint-disable max-len */
import React from 'react';
import {
  Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import Box from '@mui/system/Box/Box';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { drawerWidth } from '../../constants';
import { MainDrawerList } from '../molecules';
import { SearchAndLoginBar } from '.';
import { StyledLink } from '../atoms';

type Props = {
    children: React.ReactElement
};

const ResponsiveDrawer = function ResponsiveDrawer({ children }: Props): React.ReactElement {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = ():void => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <StyledLink to="/">
          <Typography variant="h5">&gt; optimistic.ninja</Typography>
        </StyledLink>
      </Toolbar>
      <Divider />
      <MainDrawerList />
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SearchAndLoginBar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
