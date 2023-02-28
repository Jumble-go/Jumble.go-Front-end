import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function HomeNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
    </Box>
  );
}