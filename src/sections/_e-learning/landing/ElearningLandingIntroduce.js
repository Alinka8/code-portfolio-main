// @mui
import { Typography, Stack, Container, Box, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/images';
import MySecPhoto from "../../../components/images/portrait3.png"

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
            <Image
              alt="about"
              src={MySecPhoto}
              ratio="4/6"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Front-end React Developer with 2 Years of Experience
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            As a front-end React developer, I am passionate about creating engaging and interactive
            user interfaces. I specialize in building responsive web applications using modern web
            technologies and best practices. My goal is to deliver high-quality code that meets both
            functional and aesthetic requirements.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'column' }}
            spacing={{ xs: 5, md: 10 }}
            sx={{ mt: { xs: 8, md: 10 } }}
          >
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Proficient in developing user interfaces using React.js and JavaScript.{' '}
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Experienced in working with front-end technologies such as HTML5, CSS3, and modern
                CSS frameworks like Bootstrap or Tailwind CSS.{' '}
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Familiar with version control systems, such as Git, and collaboration tools like
                GitHub.
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <Box sx={{ width: 24, height: 3, bgcolor: 'primary.main' }} />
              <Typography sx={{ color: 'text.secondary' }}>
                Strong understanding of responsive design principles and cross-browser
                compatibility.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
