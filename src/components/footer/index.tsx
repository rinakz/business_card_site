import { Box, Button, Card } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '../context/Header_context';
import { ThemeContext } from '../context/Theme_context';

export function MobileFooter() {

    const { navItemsPage} = useContext(HeaderContext)
    const { colors} = useContext(ThemeContext)


    const [showCard, setShowCard] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
      const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          setShowCard(false);
        } else {
          setShowCard(currentScrollTop === 0 || currentScrollTop < lastScrollTop);
        }
        setLastScrollTop(currentScrollTop);
      };

  return (
    <Card
      style={{
        ...{zIndex: 1000, position: 'fixed', bottom: 0, left: 0, height: '70px', width: '100%', backgroundColor: colors.beta, padding: '20px'},
        bottom: showCard ? "0" : "-50px",
        opacity: showCard ? 1 : 0.5,
        transition: "bottom 0.3s ease-in-out"
      }}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
    >
        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        {navItemsPage.map((item: any) => (
          <a key={item.id} href={item.link ? item.link : null}>
            <Button sx={{ color: colors.iota }}>
              {item.name}
            </Button>
          </a>
        ))}
      </Box>
    </Card>
  )
}
