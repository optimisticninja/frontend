import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = function LoginButton(): React.ReactElement {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();
  return !isAuthenticated
    ? (
      <Button onClick={loginWithRedirect} variant="outlined" sx={{ ml: 2 }}>
        Login
      </Button>
    // eslint-disable-next-line react/jsx-no-useless-fragment
    ) : <></>;
};

export default LoginButton;
