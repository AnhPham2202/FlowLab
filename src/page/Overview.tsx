import {Box, Typography, Button, Chip, Paper, Grid} from '@mui/material';

export function Overview() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                pt: 14,
                px: 6,
                background: `
          radial-gradient(80% 60% at 70% 20%, #1b2340 0%, transparent 60%),
          linear-gradient(180deg, #05070f, #070b14)
        `,
            }}
        >
            <Grid container alignItems="center" spacing={6}>
                {/* LEFT */}
                <Grid size={{ xs: 12, md: 6 }}>
                    {/* Badges */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                        {['react', 'mui', 'typescript'].map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                    background: 'rgba(255,255,255,0.06)',
                                    color: 'rgba(255,255,255,0.8)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                }}
                            />
                        ))}
                    </Box>

                    {/* Title */}
                    <Typography
                        sx={{
                            fontSize: 64,
                            fontWeight: 800,
                            lineHeight: 1.05,
                            color: '#fff',
                        }}
                    >
                        Hello, I&apos;m
                        <br />
                        <Box
                            component="span"
                            sx={{
                                background:
                                    'linear-gradient(90deg, #8aa2ff, #6c7cff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            FlowLab.
                        </Box>
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            mt: 3,
                            maxWidth: 460,
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: 16,
                        }}
                    >
                        Interactive system design playgrounds for interview
                        preparation. Kafka, Spring Security, distributed
                        architectures.
                    </Typography>

                    {/* Actions */}
                    <Box sx={{ mt: 5, display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                px: 4,
                                background:
                                    'linear-gradient(90deg, #6c7cff, #8aa2ff)',
                            }}
                        >
                            Get started
                        </Button>

                        <Button
                            size="large"
                            sx={{
                                px: 4,
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.2)',
                            }}
                        >
                            Learn more
                        </Button>
                    </Box>
                </Grid>

                {/* RIGHT */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper
                        sx={{
                            height: 420,
                            borderRadius: 4,
                            background:
                                'linear-gradient(180deg, #0d1020, #05070f)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.4)',
                        }}
                    >
                        {/* Sau này thay bằng image / canvas / ReactFlow preview */}
                        Playground Preview
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
