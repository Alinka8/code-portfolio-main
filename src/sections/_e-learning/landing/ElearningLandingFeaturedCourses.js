import PropTypes from 'prop-types';
import { useRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// hooks
import useResponsive from 'src/hooks/useResponsive';

// components
import Carousel, { CarouselArrows } from 'src/components/carousel';
//

// @mui
import { Container, Stack, Typography, Box, Button } from '@mui/material';
// routes

// utils

// components

import './elearningLandingFeaturedCourses.style.css';

import { ElearningCourseItem } from '../course/item';
import img1 from '../../../_mock/assets/course/course_1.jpg';
import img2 from '../../../_mock/assets/course/fleet.jpg';
import img6 from '../../../_mock/assets/course/easy_shop.jpg';
import img3 from '../../../_mock/assets/course/course_3.jpg';
import img4 from '../../../_mock/assets/course/course_4.jpg';
import img5 from '../../../_mock/assets/course/movie.jpg';

// ----------------------------------------------------------------------

const myProjects = [
  {
    title: 'Wiser LBM',
    img: img2,
    alt: 'wiser-lbm',
    description: `
    Developed a comprehensive web application designed for a trucking company to streamline load management and cost calculation. The platform is tailored to assist dispatchers, brokers, and drivers in tracking load details, calculating expenses, and managing navigation effectively. `,
  },
  {
    title: 'Easy Shop',
    img: img6,
    alt: 'easy shop',
    description: `
    The EasyShop application is a comprehensive management platform designed to help shops streamline operations, monitor progress, and ensure effective resource utilization. The application features an intuitive setup process and robust analytics for managing tasks, invoices, and operational metrics.`,
  },

  {
    title: 'Online Store',
    url: 'https://myperfectstore.netlify.app/',
    img: img4,
    alt: 'online store',
    description: `This Online Store project is a standout addition to my portfolio, showcasing my frontend skills. It revolves around an elegant online store. Rest assured, it boasts a user-friendly interface and visually appealing aesthetics. With a contemporary design, I strived to create an immersive shopping experience for customers.`,
  },
  {
    title: 'Spy Game',
    url: 'https://spygame.netlify.app/',
    img: img3,
    alt: 'spy game',
    description:
      'The Spy Game project is an exciting addition to my portfolio, highlighting my coding skills. It revolves around a thrilling spy-themed game that I developed. It promises an immersive experience, keeping players on the edge of their seats. With clever coding techniques and attention to detail.',
  },
];

export default function ElearningLandingFeaturedCourses({ courses }) {
  const theme = useTheme();

  const isMdUp = useResponsive('up', 'md');

  const carouselRef = useRef(null);

  const carouselSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'flex-end' }}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack spacing={3} flexGrow={1}>
          <Typography variant="h2">My projects</Typography>
        </Stack>

        {isMdUp && <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />}
      </Stack>

      <Box
        sx={{
          position: 'relative',
          ml: { md: -2 },
          width: { md: 'calc(100% + 32px)' },
        }}
      >
        <CarouselArrows
          onNext={handleNext}
          onPrev={handlePrev}
          leftButtonProps={{
            sx: {
              left: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: -16,
              opacity: 1,
              color: 'common.white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              ...(isMdUp && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carouselRef} {...carouselSettings}>
            {myProjects.map((proj) => (
              <Box
                key={proj.title}
                sx={{
                  px: 2,
                  pt: { xs: 8, md: 10 },
                  pb: { xs: 10, md: 15 },
                }}
              >
                <h1>{proj.title}</h1>
                <div className="projects__container">
                  <img src={proj.img} alt={proj.alt} />
                  <Typography
                    sx={{ color: 'text.secondary', paddingTop: '1rem', paddingBottom: '2rem' }}
                  >
                    {proj.description}
                  </Typography>

                  <Button variant="outlined" size="large" color="inherit">
                    <a
                      href={
                        proj.title === 'Wiser LBM' || proj.title === 'Easy Shop' ? '#' : proj.url
                      }
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {proj.title === 'Wiser LBM' || proj.title === 'Easy Shop'
                        ? 'Locked'
                        : 'View My Project'}
                    </a>
                  </Button>
                </div>
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

ElearningLandingFeaturedCourses.propTypes = {
  courses: PropTypes.array,
};

ElearningCourseItem.propTypes = {
  course: PropTypes.shape({
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    students: PropTypes.number,
    teachers: PropTypes.array,
    totalHours: PropTypes.number,
  }),
  // vertical: PropTypes.bool,
};
