import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import WorksList from '../components/WorksList';

export default function Works(){
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.down('md'));
    const cols = function () {
        if(isXs) return 1;
        else if(isSm) return 2;
        else return 4;
    }();
    return (
        <div>
            <h1>Selected Works</h1>
            <WorksList cols={cols} itemData={[
                {
                    thumbnail: 'https://img.itch.zone/aW1nLzc5MzU3NzkucG5n/315x250%23c/yEQqln.png',
                    year: 2022,
                    title: 'Lucid Dive',
                    subtitle: '2D Action Platformer',
                    info: 'A game I made with classmates for an introductory Game Programming course. I worked on most of the programming here. Check out the <a href="https://chocola-mint.github.io/blog/gamedev/lucid-dive-postmortem/">postmortem</a> if you\'re interested.',
                    descBody: (
                        <div>
                            A game I made with classmates for an introductory Game Programming course. 
                            I worked on most of the programming here. 
                            Check out the <a href="https://chocola-mint.github.io/blog/gamedev/lucid-dive-postmortem/">postmortem</a> if you're interested.
                        </div>),
                    link: 'https://chocola-mint.itch.io/lucid-dive',
                },
            ]}/>

        </div>
    )
}
