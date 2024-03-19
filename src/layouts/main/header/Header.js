import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Container } from '@mui/material';
// hooks
import useOffSetTop from 'src/hooks/useOffSetTop';
// utils
import { bgBlur } from 'src/utils/cssStyles';
// routes
// config
import { HEADER } from 'src/config-global';
// components
import HeaderShadow from '../../components/HeaderShadow';
import ModeOptions from '../../../components/settings/drawer/components/ModeOptions';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const isOffset = useOffSetTop();

  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none' }}>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ lineHeight: 0, position: 'relative' }}>{/* <Logo /> */}</Box>

          <Stack
            spacing={2}
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <ModeOptions />

              {/* <SettingsDrawer /> */}
            </Stack>
          </Stack>

          {/* {!isMdUp && <NavMobile data={navConfig} />} */}
        </Container>
      </Toolbar>

      {isOffset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
