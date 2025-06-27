import { useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Fab,
  Typography,
  Stack,
  Container,
  Box,
  Divider,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// utils
import { bgGradient } from 'src/utils/cssStyles';
import { fShortenNumber } from 'src/utils/formatNumber';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// _mock
import _mock from 'src/_mock';
// assets
import ElearningHeroIllustration from 'src/assets/illustrations/ElearningHeroIllustration';
// components
import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';
import Header from '../../../layouts/main/header/Header';
import lgo from '../../../_mock/assets/logo/linkedin.png';

// ----------------------------------------------------------------------

const SUMMARY = [
  // { value: 3, label: 'Years of Experience', color: 'warning' },
  { value: 8, label: 'Personal Projects', color: 'error' },
  { value: 80, label: 'Cups of coffee', color: 'success' },
];

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
}));

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const isMdUp = useResponsive('up', 'md');

  const [openVideo, setOpenVideo] = useState(false);

  const handleOpenVideo = () => {
    setOpenVideo(true);
  };

  const handleCloseVideo = () => {
    setOpenVideo(false);
  };

  return (
    <>
      <Header />
      <StyledRoot>
        <Container
          sx={{
            py: 15,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
          }}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: 'center', md: 'unset' },
                  marginTop: { md: '100px' },
                }}
              >
                <Typography variant="h1">
                  Hi!
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` I'm Alina Zhol`}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: 'text.disabled',
                      textDecoration: 'underline',
                      fontSize: '35px',
                      marginTop: '30px',
                    }}
                  >
                    {` Aspiring Product Designer `}
                  </Box>
                </Typography>

                <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                  <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                    <a href="https://www.linkedin.com/in/alina-zhol/">
                      <img
                        src={lgo}
                        alt="linkedin"
                        style={{ height: '3.2rem', padding: '0.3rem', marginBottom: '5px' }}
                      />
                    </a>
                    Get in touch
                  </Stack>
                </Stack>

                <Stack spacing={3} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
                  <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                    <Fab size="medium" color="info" onClick={handleOpenVideo} sx={{ mr: 1 }}>
                      <Iconify width={24} icon="carbon:play" />
                    </Fab>
                    Watch Video
                  </Stack>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />

                <Stack
                  direction="row"
                  spacing={{ xs: 3, sm: 10 }}
                  justifyContent={{ xs: 'center', md: 'unset' }}
                >
                  {SUMMARY.map((item) => (
                    <Stack key={item.value} spacing={0.5} sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: `${item.color}.main`,
                        }}
                      />
                      <Typography variant="h3">{fShortenNumber(item.value)}+</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {isMdUp && (
              <Grid xs={12} md={6} lg={7}>
                <ElearningHeroIllustration />
              </Grid>
            )}
          </Grid>
        </Container>
      </StyledRoot>

      <PlayerDialog open={openVideo} onClose={handleCloseVideo} videoPath={_mock.video(0)} />
    </>
  );
}
