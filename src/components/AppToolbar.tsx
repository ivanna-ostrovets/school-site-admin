import LogoutIcon from '@mui/icons-material/Logout';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { ROUTES } from '../routes';

function AppToolbar() {
  const { pathname } = useLocation();
  const { isAuthorized, signOut } = useContext(AppContext);
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    const pageRoute = Object.values(ROUTES).find(
      route => route.path === pathname,
    );

    if (pageRoute && pageRoute.title) {
      setPageTitle(` | ${pageRoute.title}`);
      return;
    }

    setPageTitle('');
  }, [pathname]);

  // TODO: change link to news page
  return (
    <AppBar position="fixed" sx={{ zIndex: 'drawer' }}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6">
            <Link to={ROUTES.partners.path}>
              Адміністративна панель Селецького ЗЗСО
            </Link>

            {pageTitle}
          </Typography>

          {isAuthorized && (
            <IconButton onClick={signOut} color="inherit">
              <LogoutIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
