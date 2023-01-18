import { Box, Grid } from '@mui/material';
import React from 'react';
import BioContent from './BioContent';

export default function Bio(){
    const content = BioContent();
    return (
        <div>
            <Box width='100%'>
                <Grid container>
                    <Grid item xs={0} md={5}>

                    </Grid>
                    <Grid item xs={12} md={7} style={{padding: '70px 0'}} height='50vh'>
                        <Box sx={{textAlign:'right', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingBottom:'20px'}}>
                            {content.whoAmI}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}  style={{padding: '70px 0'}} height='50vh'>
                        <Box sx={{textAlign:'left', width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingBottom:'20px'}}>
                            {content.experience}
                        </Box>
                    </Grid>
                    <Grid item xs={0} md={5}>

                    </Grid>
                </Grid>
            </Box>
            <Box>
                {content.skillsetTitle}
                <Box sx={{width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingBottom:'20px', textAlign:'left'}}>
                    {content.skillset}
                </Box>
            </Box>
                
        </div>
    )
}