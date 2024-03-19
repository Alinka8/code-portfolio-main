// _mock
import { _testimonials, _brandsColor } from 'src/_mock';
//
import OurClientsCareer from '../../our-clients/career';
import TestimonialElearning from '../../testimonial/e-learning';
import { ElearningAbout, ElearningAboutHero, ElearningAboutCoreValues } from '../about';

// ----------------------------------------------------------------------

export default function ElearningAboutView() {
  return (
    <>
      <ElearningAboutHero />

      <ElearningAbout />

      <ElearningAboutCoreValues />

      <OurClientsCareer brands={_brandsColor} />

      <TestimonialElearning testimonials={_testimonials} />
    </>
  );
}
