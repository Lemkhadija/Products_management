import React from 'react';
import TopBar from '@/layouts/top-bar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Blind, Link } from '@mui/icons-material';
import Script from 'next/script';
import { draftMode } from 'next/headers';
import ResponsiveAppBar from '@/layouts/top-bar';

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {

  return (
    <>
      <ResponsiveAppBar />
    
      <Box
        paddingY={4}
        paddingX={4}
        
      
      >
        {children}
      </Box>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2> */}
    </>
  );
};

export default Main;
