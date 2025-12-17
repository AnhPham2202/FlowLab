import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';

import {Overview} from "./page/Overview.tsx";
import {Header} from "./component/Header.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Box sx={{ minHeight: '100vh', backgroundColor: '#070b14' }}>
                <Header />

                <Box sx={{ padding: 4 }}>
                    <Routes>
                        <Route path="/" element={<Overview />} />
                    </Routes>
                </Box>
            </Box>
        </BrowserRouter>
    );
}
