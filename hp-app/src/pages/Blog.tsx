import { Box } from '@mui/material';
import React from 'react';

export default function Blog(){
    return (
        <div>
            <Box width='100%' height='100vh'>
            <iframe title="Blog" src="https://chocola-mint.github.io/blog/" width='100%' height='100%' style={{border:'none'}}></iframe>
            </Box>
        </div>
    )
}