import React from 'react';
import {
  Container, createTheme, CssBaseline, useMediaQuery,
} from '@mui/material';
import { ThemeProvider } from '@mui/system';
import createTypography from '@mui/material/styles/createTypography';
import createPalette from '@mui/material/styles/createPalette';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResponsiveDrawer } from './organisms';
import { Home, NotFound, Post } from './templates';
import About from './templates/About';
import Connect from './templates/Connect';
import { GlobalStateProvider } from '../state/GlobalStateProvider';

const App = function App(): React.ReactElement {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        primary: {
          main: '#48b53f',
        },
        secondary: {
          main: '#ff4081',
        },
      },
      typography: createTypography(createPalette({
        mode: 'dark',
      }), {
        fontFamily: '"Ubuntu"',
      }),
    }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <ResponsiveDrawer>
          <Container>

            <GlobalStateProvider>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/posts/:id" element={<Post />} />
              </Routes>

            </GlobalStateProvider>
          </Container>
        </ResponsiveDrawer>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
