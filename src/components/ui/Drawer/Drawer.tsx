import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer as DrawerComponent,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { ReactNode, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const drawerList = [
  { icon: <DashboardIcon />, title: 'Dashboard', href: '/' },
  { icon: <CurrencyExchangeIcon />, title: 'Currency', href: '/currency' },
  {
    icon: <ListAltIcon />,
    title: 'Statement List',
    href: '/statement',
  },
];

interface DrawerProps {
  window?: () => Window;
  children: ReactNode;
}

const Drawer = (props: DrawerProps) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogOut = () =>
    signOut(auth)
      .then(() => navigate('/auth'))
      .catch((error) => console.log(error));

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List sx={{ pt: 2 }}>
        {drawerList.map((item) => (
          <ListItem button key={item.title} component={Link} href={item.href}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box p={2} display="flex" justifyContent="center">
        <Button fullWidth onClick={handleLogOut}>
          LOG OUT
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box display="flex" bgcolor="black" height="100vh">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          mb: 5,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          pl: 3,
          backgroundColor: 'unset',
          display: { sm: 'none' },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: 'none' }, p: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <DrawerComponent
          container={container}
          open={mobileOpen}
          onClose={() => setMobileOpen(!mobileOpen)}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </DrawerComponent>
        <DrawerComponent
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </DrawerComponent>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pt: { xs: 8 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Drawer;
