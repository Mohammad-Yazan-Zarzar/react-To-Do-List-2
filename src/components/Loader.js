import'./Loader.css'

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader(props) {
    if(props.loaderOn==='on'){
    return (
    <Box className='center' sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
    }
}