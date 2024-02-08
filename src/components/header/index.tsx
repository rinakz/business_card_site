import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme_context';
import stls from '../styles/components/Headers.module.sass'
import { useTranslation } from 'react-i18next';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { HeaderContext } from '../context/Header_context';



export function Header() {

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { colors} = useContext(ThemeContext)
  const { navItemsPage, navItems} = useContext(HeaderContext)


  const drawerWidth = 240;

  const drawerItems = [ 
    // {id: 1, name: t('drawer.myHome'), icon: <TipsAndUpdatesOutlinedIcon sx={{color: colors.zeta}} />, link: 'my_room'},
    {id: 2, name: t('drawer.settings'), icon: <DisplaySettingsIcon sx={{color: colors.zeta}} />, link: 'settings'},
  ];

    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };

      const list = () => (
        <Box
          sx={{width: drawerWidth}}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {drawerItems.map((el: any) => (
              <ListItem key={el.id} disablePadding>
                <ListItemButton onClick={() => navigate(el.link)}>
                  <ListItemIcon>
                    {el.icon}
                  </ListItemIcon>
                  <ListItemText primary={el.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
          </List>
        </Box>
      );

  return (
    <AppBar sx={{position: 'static'}}>
    <Toolbar>
      <IconButton
        id='appbar'
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onMouseEnter={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        >
        <div style={{background: colors.beta, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <ListItemButton style={{fontWeight: 'bold', fontSize: '24px', color: colors.iota, display: 'flex', justifyContent: 'center'}} onClick={() => {navigate('/'); handleDrawerToggle()}}>RinaKZ</ListItemButton>
          <IconButton onClick={handleDrawerToggle}>
            <ArrowCircleLeftOutlinedIcon sx={{color: colors.iota}} />
          </IconButton>
        </div>
            {list()}
          </Drawer>
      <div onClick={() => navigate('/')} className={stls.buttonHome}>rinakz</div>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItemsPage.map((item: any) => (
          <a key={item.id} href={item.link ? `../${item.link}` : ''}>
            <Button id={`header_pages${item.id}`} sx={{ color: colors.iota }}>
              {item.name}
            </Button>
          </a>
        ))}
      </Box>
      <Box>
        {navItems.map((item: any) => (
          <a key={item.id}>
            <Button id={`header_buttons${item.id}`} sx={{ color: colors.iota }}>
              {item.name}
            </Button>
          </a>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
  )
}
