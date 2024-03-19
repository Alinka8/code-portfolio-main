import PropTypes from 'prop-types';
import { memo } from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import Image from 'src/components/images';
import Mypic from "../../components/images/portrait4.png";
// pattern
import { Icon, Label, Shape, Pattern01, Pattern02 } from './pattern';

// ----------------------------------------------------------------------

const varUp = {
  animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
  transition: { duration: 8, repeat: Infinity },
};

const varDown = {
  animate: { y: [8, -8, 8], x: [4, -4, 4] },
  transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

const varRight = {
  animate: { x: [8, -8, 8], y: [4, -4, 4] },
  transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function ElearningHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const ORANGE = '#e34c26';

  const YELLOW = '#F0DB4F';

  const BLUE = '#355EC9';

  return (
    <Box
      sx={{
        width: 670,
        height: 670,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
       
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ position: 'absolute', right: 18, bottom: 80, zIndex: 8}}>
        <Image
          visibleByDefault
          disabledEffect
          alt="myphoto"
          src={Mypic}
          sx={{ width: 500, height: 550, marginRight:10}}
        />
      </Box>

      <Box
        {...varDown}
        component={m.div}
        sx={{ position: 'absolute', left: 115, bottom: 115, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="book icon"
          src="/assets/icons/ic_book.png"
          sx={{ width: 52, height: 62 }}
        />
      </Box>
      <Box
        {...varRight}
        component={m.div}
        sx={{ position: 'absolute', left: 18, top: 220, zIndex: 8 }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="pencil icon"
          src="/assets/icons/ic_pencil.png"
          sx={{ width: 60, height: 77 }}
        />
      </Box>
      <Box
        {...varUp}
        component={m.div}
        sx={{ zIndex: 9, left: 120, bottom: 168, position: 'absolute' }}
      >
        <Label
          text="React"
          icon={
            <Image
              visibleByDefault
              disabledEffect
              alt="react"
              src="/assets/icons/platforms/ic_rct.svg"
              sx={{ width: 56, height: 56 }}
            />
          }
          sx={{
            py: 1.75,
            typography: 'h3',
            color: '#2994FF',
            boxShadow: `0px 24px 48px rgba(0, 0, 0, 0.24), inset 0px -4px 10px ${alpha(
              theme.palette.grey[600],
              0.48
            )}`,
          }}
        />
      </Box>
      <Box
        {...varLeft}
        component={m.div}
        sx={{ top: 88, right: 72, zIndex: 8, position: 'absolute' }}
      >
        <Icon
          color={ORANGE}
          content={
            <Image
              visibleByDefault
              disabledEffect
              alt="html"
              src="/assets/icons/platforms/ic_html.svg"
              sx={{ width: 50, height: 50 }}
            />
          }
          sx={{ transform: 'scale(1.2) rotate(15deg)' }}
        />
      </Box>
      <Box {...varRight} component={m.div} sx={{ zIndex: 8, bottom: 160, position: 'absolute' }}>
        <Icon
          color={YELLOW}
          content={
            <Image
              visibleByDefault
              disabledEffect
              alt="js"
              src="/assets/icons/platforms/ic_js.svg"
              sx={{ width: 60, height: 77 }}
            />
          }
          sx={{ transform: 'translateX(50px) scale(1.2) rotate(-15deg)' }}
        />
      </Box>
      <Box {...varDown} component={m.div} sx={{ zIndex: 8, position: 'absolute' }}>
        <Icon
          color={BLUE}
          content={
            <Image
              visibleByDefault
              disabledEffect
              alt="css"
              src="/assets/icons/platforms/ic_css2.svg"
              sx={{ width: 100, height: 52 }}
            />
          }
          sx={{ transform: 'scale(1.2) translate(-135px, -75px) rotate(15deg)' }}
        />
      </Box>
      <Pattern01 sx={{ left: 0, top: 0 }} />
      <Pattern02 sx={{ top: 0, left: 0, opacity: 0.24, transform: 'scale(1.2)' }} />
      <Shape sx={{ position: 'absolute', right: 32, bottom: 32 }} />
    </Box>
  );
}

ElearningHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(ElearningHeroIllustration);
