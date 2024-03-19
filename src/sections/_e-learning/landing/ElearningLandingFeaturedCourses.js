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
import img2 from '../../../_mock/assets/course/course_2.jpg';
import img3 from '../../../_mock/assets/course/course_3.jpg';
import img4 from '../../../_mock/assets/course/course_4.jpg';
import img5 from '../../../_mock/assets/course/movie.jpg';

// ----------------------------------------------------------------------

const myProjects = [
  {
    title: 'Car Dealership',
    url: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL4ZW14DDKjvK8ozSb7A4s%2FDEALERSHIP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-20557%26viewport%3D543%252C361%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A20557%26mode%3Ddesign',
    img: img1,
    alt: 'car dealership',
    description: `The Figma Car Dealership project is a digital design I created. It's all about a car dealership website I made, and let me tell you, it's super cool. The design is sleek and easy to use, with a modern look and feel. I focused on creating a visually appealing and user-friendly interface for automotive businesses. It's a great example of my skills in action!`,
  },
  {
    title: 'Daycare',
    url: 'https://helenlucydaycare.netlify.app/',
    img: img2,
    alt: 'daycare',
    description: `
    The React and MUI Daycare project is a portfolio gem, showcasing my frontend skills. It's about a cute daycare site made with React and MUI. Trust me, it's user-friendly and visually charming. With a playful design, I aimed for an enjoyable experience for parents and kids.  It's proof of my ability to blend creativity and functionality for engaging childcare interfaces.`,
  },
  {
    title: 'Online Store',
    url: 'https://myperfectstore.netlify.app/',
    img: img4,
    alt: 'online store',
    description: `This Online Store project is a standout addition to my portfolio, showcasing my frontend skills. It revolves around an elegant online store I developed using React. Rest assured, it boasts a user-friendly interface and visually appealing aesthetics. With a contemporary design, I strived to create an immersive shopping experience for customers.`,
  },
  {
    title: 'Spy Game',
    url: 'https://spygame.netlify.app/',
    img: img3,
    alt: 'spy game',
    description:
      'The Spy Game project is an exciting addition to my portfolio, highlighting my coding skills. It revolves around a thrilling spy-themed game that I developed. It promises an immersive experience, keeping players on the edge of their seats. With clever coding techniques and attention to detail, I aimed to create an engaging and suspenseful gameplay.',
  },
  {
    title: 'Movies dom',
    url: 'https://moviestomek.netlify.app/',
    img: img5,
    alt: 'movie app',
    description: ` Js dom creates movie tile and modal from object data. This task involves dynamically generating HTML elements based on the information stored in objects, allowing for a more flexible and maintainable way to display content.  Each click opens a sleek modal with all the details you need. It's more than a website. It's a cool cinematic experience waiting for you!`,
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
                    <a href={proj.url} style={{ textDecoration: 'none', color: 'black' }}>
                      View the project
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
