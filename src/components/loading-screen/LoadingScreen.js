import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// utils
//
import ProgressBar from '../progress-bar';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function LoadingScreen({ sx }) {
  return (
    <>
      <ProgressBar />

      <Box sx={{ width: 1, height: '100vh' }} />
    </>
  );
}

LoadingScreen.propTypes = {
  sx: PropTypes.object,
};
