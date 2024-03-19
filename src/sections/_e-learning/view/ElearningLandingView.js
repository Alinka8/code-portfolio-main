// _mock
import { _courses, _brandsColor } from 'src/_mock';
//

import OurClientsCareer from '../../our-clients/career';
import {
  ElearningLandingHero,
  ElearningLandingIntroduce,
  ElearningLandingFeaturedCourses,
} from '../landing';

import Footer from '../../../layouts/main/footer/Footer';
// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <OurClientsCareer brands={_brandsColor} />

      <ElearningLandingIntroduce />

      <ElearningLandingFeaturedCourses courses={_courses} />
      <Footer />
    </>
  );
}
