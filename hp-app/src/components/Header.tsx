import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';

/** The component that renders the hero section of the homepage. */
export default function Header(props : {
  logo: string
}) {
  return (
    <header style={{width: '100%', height: '50vh', position: 'relative'}}>
        <Box
            sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
        }}>
              <img src={props.logo} className="App-logo" alt="logo" 
                style={{
                  position: 'absolute', right: 0, bottom: 0, minHeight: '100%'}}/>
              <div style={{
                position: 'absolute', width: '100%', height: '100%',
                padding: '70px 0'}}>
                <Typography variant='h1'>
                  ChocolaMint
                </Typography>
                <Typography variant='h3'>
                  Game designer / programmer
                </Typography>
              </div>
        </Box>
    </header>
  );
}