import React from 'react';

import {
  Avatar, IconButton, Menu, MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

const UserAvatar = function UserAvatar(): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const {
    isAuthenticated,
    user,
    logout,
  } = useAuth0();

  const handleMenu = (event: React.MouseEvent<HTMLElement>):void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ():void => {
    setAnchorEl(null);
  };

  const handleMyAccount = ():void => {
    navigate('/account');
  };

  const handleLogout = ():void => {
    logout({ returnTo: window.location.origin });
    handleClose();
  };

  return (
    isAuthenticated ? (
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleMenu}
          color="inherit"
          sx={{ ml: 2 }}
        >
          <Avatar
            alt={user?.preferred_username}
          >
            {user?.preferred_username?.charAt(0).toUpperCase()}
          </Avatar>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleMyAccount}>Account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
      </>
    // eslint-disable-next-line react/jsx-no-useless-fragment
    ) : <></>
  );
};

export default UserAvatar;
