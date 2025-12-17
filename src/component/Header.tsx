import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';

export function Header() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: 'transparent',
                backdropFilter: 'blur(8px)',
            }}
        >
            <Toolbar sx={{ px: 6 }}>
                {/* Logo */}
                <Typography
                    sx={{
                        fontWeight: 700,
                        letterSpacing: 1,
                        color: '#fff',
                    }}
                >
                    wendo
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                {/* Nav */}
                <Box sx={{ display: 'flex', gap: 3 }}>
                    {['home', 'about', 'projects', 'services'].map((item) => (
                        <Button
                            key={item}
                            sx={{
                                color: 'rgba(255,255,255,0.7)',
                                textTransform: 'none',
                                fontSize: 14,
                                '&:hover': { color: '#fff' },
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
