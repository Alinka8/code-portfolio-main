import { useLocation } from 'react-router-dom';
// @mui
import { Stack, Divider, Container, Typography } from '@mui/material';
// hooks
// _mock
// components
//
// import { pageLinks, navConfig } from '../nav/config-navigation';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Footer() {
  const { pathname } = useLocation();

  // const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

  // const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  // const renderLists = isMdUp ? desktopList : mobileList;

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
        © 2025. All rights reserved by Alina Zhol
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider />
      <Divider />
      <Container>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2024. All rights reserved by Alina Zhol
          </Typography>
        </Stack>
      </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------
