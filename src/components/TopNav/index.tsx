import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BlockchainType } from '@liqnft/candy-shop-sdk';
import { ConnectButton } from '@/components/ConnectButton';
import { RouteName } from '@/constant/routeNames';
import { NETWORK } from '@/utils/candy-shop';
import { getBlockchain } from '@/utils/shop';

//This is a check

const ROUTES_ETH = [
  { url: RouteName.home, name: 'Marketplace' },
  { url: RouteName.sell, name: 'Sell' },
];

const ROUTES_SOLANA = [
  { url: RouteName.pfps, name: 'PFPs' },
  { url: RouteName.digitalCollectibles, name: 'Collectibles' },
  { url: RouteName.digitalArt, name: 'Art' },
];

const getRoutes = () => {
  if (getBlockchain(NETWORK) === BlockchainType.EVM) {
    return ROUTES_ETH;
  }

  return ROUTES_SOLANA;
};

const OTHER_LAYOUT_ROUTES = [
  { url: RouteName.customToken, name: 'Custom Token Marketplace' },
  { url: RouteName.multipleCollection, name: 'Multi Collection Marketplace' },
  { url: RouteName.marketplaceWithUrl, name: 'Marketplace With URL' },
  { url: RouteName.activityView, name: 'Marketplace Activity' },
];

const ROUTES_KLAUSENART = [
  { url: RouteName.news, name: 'News' },
  { url: RouteName.gallery, name: 'Gallery' },
  { url: RouteName.roadmap, name: 'Roadmap' },
  { url: RouteName.tokenomics, name: 'Tokenomics' },
];


const TopNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);
  const blockchain = getBlockchain(NETWORK);

  const { pathname } = useLocation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current?.contains(event.target)) return;
    setOpen(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleTwitter = () => {
    window.location.href = 'https://twitter.com/KlausenArt';
  };
  const handleInsta = () => {
    window.location.href = 'https://www.instagram.com/klausenartdesign/';
  };
  const handleFacebook = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100086525372731';
  };
  const handleDiscord = () => {
    window.location.href = 'https://discord.com/channels/941601539380887582';
  };
   const handleMagicEden = () => {
    window.location.href = 'https://magiceden.io/u/klausenart';
  };
   const handleOpenSea = () => {
    window.location.href = 'https://opensea.io/klausenart';
  };
   const handleYoutube = () => {
    window.location.href = 'https://www.youtube.com/channel/UC8bGv6NHUHMMYj3dGAtVrpw';
  };
   const handleTiktok = () => {
    window.location.href = 'https://www.youtube.com/channel/UC8bGv6NHUHMMYj3dGAtVrpw';
  };
  
  return (
    <HeaderBar>
      
      <Logo>
        <Link to={RouteName.klausenart}>
          <img alt="" src="/logo.png" />
        </Link>
      </Logo>
      
      <Menu>
        {getRoutes().map((item) => (
          <li key={item.url} className={pathname === item.url ? 'active' : ''}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
         {blockchain === BlockchainType.SOL && (
          <DropdownAnchor2
            ref={anchorRef}
            onClick={handleToggle}
            className={ROUTES_KLAUSENART.some((item) => item.url === pathname) ? 'active' : ''}
          >
            Info
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                    {ROUTES_KLAUSENART.map((item) => (
                      <MenuItem
                        className={item.url === pathname ? 'active active-submenu' : ''}
                        key={item.url}
                      >
                        <Link to={item.url}>{item.name}</Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Popper>
          </DropdownAnchor2> 
        )}
      </Menu>

      <SocialMedia>
        <Button onClick={handleTwitter}> <img alt="" src="/twitter.png" /> </Button>
        <Button onClick={handleInsta}> <img alt="" src="/insta.png" /> </Button>
        <Button onClick={handleFacebook}> <img alt="" src="/facebook.png" /> </Button>
        <Button onClick={handleDiscord}> <img alt="" src="/discord.png" /> </Button>
        <Button onClick={handleMagicEden}> <img alt="" src="/magiceden.png" /> </Button>
        <Button onClick={handleOpenSea}> <img alt="" src="/opensea2.png" /> </Button>
        <Button onClick={handleYoutube}> <img alt="" src="/youtube.png" /> </Button>
        <Button onClick={handleTiktok}> <img alt="" src="/tiktok.png" /> </Button>
      </SocialMedia>
      
      <Wallet>
        <ConnectButton />
      </Wallet>
      
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const DropdownAnchor = styled.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: rgb(131, 146, 161);
    border-bottom: 4px solid var(--title-text-color);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 15px;
  }
  a {
    padding-top: 4px;
    padding-bottom: 4px;

    &:hover {
      border-bottom: 0px;
      color: #fff;
    }
  }
`;

const DropdownAnchor2 = styled.li`
  cursor: pointer;
  transition: color 0.3s;

  &:hover,
  &:active {
    color: rgb(131, 146, 161);
    border-bottom: 4px solid var(--title-text-color);
  }

  > div {
    z-index: 1000;
  }

  .MuiList-root {
    margin-top: 15px;
  }
  a {
    padding-top: 4px;
    padding-bottom: 4px;

    &:hover {
      border-bottom: 0px;
      color: #fff;
    }
  }
`;

const Wallet = styled.ul`
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;
  margin-bottom: 20px;

  img {
    height: 60px;
  }
`;

const SocialMedia = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 20px;
  color: 'transparent';
  backgroundColor: 'transparent';
  align-items: left;
  

  //img {
    //height: 40px;
  //}
`;

const Button = styled.button`
  border: none;
  //color: #00FFFFFF;
  color: 'transparent';
  cursor: pointer;
  //display: flex;
  align-items: center;
  //font-family: 'Inter', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  //font-size: 16px;
  //font-weight: 600;
  height: 30px;
  width: 35px;
  //width: 40px;
  //line-height: 30px;
  //padding: 0px 20px;
  //border-radius: 40px;
  background-color: rgba(255, 255, 255, 0);
  margin: 0 auto;
  //margin: 0 10px;
  //margin-right: 10px;
  img {
    height: 30px;
    //margin-right: 3px;
  }
  
`;

const Menu = styled.ul`
  list-style: none;
  display: inline-flex;
  flex: 0 0 auto;
  margin-bottom: 20;
  align-items: center;

  > .active {
    border-bottom: 4px solid var(--title-text-color);
  }

  > .active-submenu {
    background-color: rgba(255, 255, 255, 0.08);
  }

  > li {
    margin: 0 12px;
    padding: 5px;

    a {
      color: var(--main-text-color);
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      outline: none;
      text-decoration: none;
      text-size-adjust: 100%;
      touch-action: manipulation;
      transition: color 0.3s;

      img {
        max-height: 26px;
      }
    }

    &:hover,
    &:active {
      border-bottom: 4px solid var(--title-text-color);
    }

    &:hover > a {
      color: rgb(131, 146, 161);
    }
  }
`;

export default TopNav;
