
import { Routes, Route } from 'react-router-dom'
import { Box, SxProps, Theme } from '@mui/system'

import { Header } from '../components/header';
import { paths } from '../app/constants/paths';

import { CurrensiesPage } from './currensiesPage';
import { ExchangePage } from './exchangePage';
import { palette } from '../theme/colors';
import theme from '../theme';


export function Root() {
    return (
        <Box sx={styles.rootCard}>
            <Box sx={styles.rootCard__header}>
                <Header />
            </Box>
            <Box sx={styles.rootCard__body}>
                <Routes>
                    <Route path={paths.currensiesPage} element={<CurrensiesPage />} />
                    <Route path={paths.exchangePage} element={<ExchangePage />} />
                </Routes>
            </Box>
        </Box>
    )
}

const styles = {
    rootCard: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "auto",
        padding: "8px",
        borderRadius: "16px",
        backgroundColor: palette.containerBg.light,
        [theme.breakpoints.up('xs')]: {
            padding: "12px",
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "row",
            minWidth: "100px",
            marginBottom: "8px",
            padding: "48px",
            textAlign: "start",
        },
    } as SxProps<Theme>,
    rootCard__header: {
        width: "100%",
        margin: "0 0 12px 0",
        [theme.breakpoints.up('md')]: {
            width: "20%",
            mr: "12px",
        }
    } as SxProps<Theme>,
    rootCard__body: {
        display: "flex",
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: "80%", 
        }
    } as SxProps<Theme>,
}