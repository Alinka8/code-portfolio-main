import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import LoadingScreen from 'src/components/loading-screen';
import _courses from 'src/_mock';
import { ElearningCourseDetailsHero, ElearningCourseDetailsInfo } from '../course/details';

const _mockCourse = _courses[0];

export default function ElearningCourseView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ElearningCourseDetailsHero course={_mockCourse} />

      <Container sx={{ overflow: 'hidden', pt: { xs: 5, md: 10 }, pb: { xs: 15, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12}>
            <ElearningCourseDetailsInfo course={_mockCourse} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
