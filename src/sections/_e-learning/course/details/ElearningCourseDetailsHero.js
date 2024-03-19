import PropTypes from 'prop-types';
// @mui
import { Box, Stack, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// hooks
// utils

// _mock

// components

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsHero({ course }) {
  const {
    slug,

    category,

    description,
  } = course;

  return (
    <>
      <Box
        sx={{
          bgcolor: 'background.neutral',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: paths.eLearning.courses },
              { name: course.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 10 },
            }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <iframe
              title="something"
              width="400"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTL4ZW14DDKjvK8ozSb7A4s%2FDEALERSHIP%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D5-20557%26viewport%3D543%252C361%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A20557%26mode%3Ddesign"
              allowfullscreen
            />

            <Grid xs={12} md={7}>
              <Stack spacing={3}>
                <Stack spacing={2} alignItems="flex-start">
                  <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                    {category}
                  </Typography>

                  <Typography variant="h3" component="h1">
                    {slug}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <PlayerDialog /> */}
    </>
  );
}

ElearningCourseDetailsHero.propTypes = {
  course: PropTypes.shape({
    bestSeller: PropTypes.bool,
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    languages: PropTypes.array,
    lessons: PropTypes.array,
    level: PropTypes.string,
    quizzes: PropTypes.number,
    ratings: PropTypes.number,
    reviews: PropTypes.number,
    slug: PropTypes.string,
    students: PropTypes.number,
    teachers: PropTypes.array,
    totalHours: PropTypes.number,
  }),
};
