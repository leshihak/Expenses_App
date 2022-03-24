import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer as DrawerComponent,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { ReactNode, useState } from 'react';

const drawerWidth = 240;
const drawerList = [
  { icon: <DashboardIcon />, title: 'Dashboard', href: '/' },
  { icon: <CurrencyExchangeIcon />, title: 'Currency', href: '/currency' },
];

interface DrawerProps {
  window?: () => Window;
  children: ReactNode;
}

const Drawer = (props: DrawerProps) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
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
        <Button fullWidth>LOG OUT</Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box display="flex" bgcolor="black" height="100vh">
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <DrawerComponent
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Drawer;
