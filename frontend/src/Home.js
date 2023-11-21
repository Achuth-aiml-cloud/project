import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const defaultTheme = createTheme();

function Home() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        SDE AI 
                    </Typography>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/"
                            sx={{ my: 1, mx: 1.5 }}
                            style={{textDecoration:"none",cursor:"pointer"}}
                        >
                            Object Recognition 
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/image-classification"
                            sx={{ my: 1, mx: 1.5 }}
                            style={{textDecoration:"none",cursor:"pointer"}}
                        >
                            Image Classification
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/img-segmentation"
                            sx={{ my: 1, mx: 1.5 }}
                            style={{textDecoration:"none",cursor:"pointer"}}
                        >
                            Segmentation
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="/handpose"
                            sx={{ my: 1, mx: 1.5 }}
                            style={{textDecoration:"none",cursor:"pointer"}}
                        >
                            HandPose Detection
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Home;