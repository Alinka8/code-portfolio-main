// @mui
import { Typography, Stack, Container, Box, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/images';
import MySecPhoto from '../../../components/images/portrait3.png';

// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        py: { xs: 8, md: 15 },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: 'primary.main',
          mb: { xs: 2, md: 10 },
        }}
      >
        A Couple of words about myself
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        {isMdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="about" src={MySecPhoto} ratio="4/6" sx={{ borderRadius: 2 }} />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Aspiring Product Designer
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            I began my career as a QA tester, ensuring the quality and usability of digital
            products. Along the way, I became increasingly curious about how experiences are
            designed — not just how they function. That curiosity led me to product design, where
            I’m now focused on learning how to craft intuitive, meaningful user experiences that go
            beyond functionality.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'column' }}
            spacing={{ xs: 5, md: 10 }}
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Proficient in building responsive interfaces using React.js, JavaScript, HTML5, and
                CSS3 — with attention to both structure and user experience.{' '}
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Experienced in cross-browser QA testing, applying usability principles to identify
                layout and accessibility issues early in the development process.{' '}
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Familiar with modern UI frameworks like Tailwind CSS and Bootstrap, and passionate
                about clean, intuitive design.
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Currently transitioning into product design, bringing a unique perspective from QA
                and frontend development to craft thoughtful, user-centered interfaces.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
