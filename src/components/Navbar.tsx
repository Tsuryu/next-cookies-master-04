import { AppBar, IconButton, Toolbar } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <NextLink href="/" passHref legacyBehavior>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link>
            <Typography variant="h6" color="white">
              CookieMaster
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex: 1 }} />
        <NextLink href="/theme-changer" passHref legacyBehavior>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link>
            <Typography variant="h6" color="white">
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
