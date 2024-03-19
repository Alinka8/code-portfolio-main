import PropTypes from 'prop-types';

// @mui

import { AppBar } from '@mui/material';
// config

// components
//
import HeaderShadow from '../components/HeaderShadow';

// ----------------------------------------------------------------------

export default function Header({ isOffset }) {
  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  isOffset: PropTypes.bool,
};
