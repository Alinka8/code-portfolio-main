import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Card, Stack, Box, Link } from '@mui/material';
import { paths } from 'src/routes/paths';
import Image from 'src/components/images';
import TextMaxLine from 'src/components/text-max-line';

export default function ElearningCourseItem({ course, vertical }) {
  const { slug, coverImg, description } = course;

  return (
    <Card
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      <Box sx={{ flexShrink: { sm: 0, height: '15rem' } }}>
        <Image
          alt={slug}
          src={coverImg}
          sx={{
            height: 1,
            objectFit: 'cover',
            width: { sm: 240 },
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {/* <Typography variant="overline" sx={{ color: 'primary.main' }}>
              {category}
            </Typography> */}
          </Stack>

          <Stack spacing={1}>
            <Link component={RouterLink} to={paths.eLearning.course} color="inherit">
              <TextMaxLine variant="h6" line={1}>
                {slug}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              sx={{
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            >
              {description}
            </TextMaxLine>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

ElearningCourseItem.propTypes = {
  course: PropTypes.shape({
    category: PropTypes.string,
    coverImg: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }),
  vertical: PropTypes.bool,
};
