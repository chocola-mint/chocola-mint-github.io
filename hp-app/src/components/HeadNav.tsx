import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { AppBar } from '@mui/material';

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function HeadNav() {
  const [, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const routeMatch = useRouteMatch(['/bio', '/works', '/blog', '/contact']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <AppBar position='sticky'>
    <Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs 
        onChange={handleChange} 
        value={currentTab ? currentTab : "/bio"} 
        centered
      >
        <Tab label="Bio" value="/bio" to="/bio" component={Link} />
        <Tab label="Works" value="/works" to="/works" component={Link} />
        {/* <Tab label="Blog" onClick={() => window.location.href = 'https://chocola-mint.github.io/blog/'}/> */}
        <Tab label="Blog" value="/blog" to="/blog" component={Link}/>
        <Tab label="Contact" value="/contact" to="/contact" component={Link} />
      </Tabs>
    </Box>

    </AppBar>
  );
}