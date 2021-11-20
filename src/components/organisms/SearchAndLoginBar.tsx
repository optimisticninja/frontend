/* eslint-disable max-len */
import React, { FormEventHandler, KeyboardEventHandler, useState } from 'react';
import {
  AppBar, IconButton, InputBase, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
{ PostsApi, ListPostsResponse, Post } from '@optimisticninja/posts-api-js-client';
import { useNavigate } from 'react-router';
import { drawerWidth } from '../../constants';
import { LoginButton, UserAvatar } from '../molecules';
import { GlobalStateInterface } from '../../state/GlobalStateProvider';
import { useGlobalState } from '../../hooks/useGlobalState';

interface Handlers {
    handleDrawerToggle: () => void
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAndLoginBar = function SearchAndLoginBar(props: Handlers): React.ReactElement {
  const { handleDrawerToggle } = props;
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { state, setState } = useGlobalState();

  const handleSearchSubmit = (event: any): void => {
    if (event.key === 'Enter') {
      const textBlocks = /'(''|[^'])*'/;
      const sqlStatements = /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/i;
      setQuery(event.target.value);

      if (query.match(textBlocks) || query.match(sqlStatements)) {
        navigate('/ohno');
      } else {
        const apiInstance = new PostsApi();
        const opts = {
          page: 0, // Number | page offset
          size: 50, // Number | page size
          query,
        };
        apiInstance.getPosts(opts).then((data: ListPostsResponse) => {
          console.log(setState);
          setState((prev: GlobalStateInterface) => ({ ...prev, posts: data.posts }));
          navigate(`/posts?query=${query}`);
        }, (error: unknown) => {
          console.error(error);
        });
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
          />
        </Search>
        <LoginButton />
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
};

export default SearchAndLoginBar;
