// @mui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Typography, Stack, Container, Paper, Box } from '@mui/material';
// components
import Image from 'src/components/images';
import Carousel from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function OurClientsCareer({ brands }) {
  const theme = useTheme();

  const carouselSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">I Work With</Typography>
      </Stack>

      <Carousel {...carouselSettings}>
        {brands.map((brand) => (
          <Box key={brand.id} sx={{ px: 0.5 }}>
            <Paper
              variant="outlined"
              sx={{
                py: 3,
                borderRadius: 3,
                bgcolor: 'background.default',
              }}
            >
              <Image
                alt={brand.name}
                src={brand.image}
                sx={{
                  width: '100%',
                  height: '100%',
                  mx: 'auto',
                  p: '10px',
                }}
              />
            </Paper>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
}

OurClientsCareer.propTypes = {
  brands: PropTypes.array,
};
