import { Helmet } from 'react-helmet-async';
// sections
import { ElearningLandingView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  const title = `Alina's Portfolio`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
