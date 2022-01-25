import { FC } from "react";

import { NavLink } from 'react-router-dom';
import { paths } from "../../app/constants/paths";

import { Link, Box, SxProps, Theme } from "@mui/material";

import { palette } from "../../theme/colors";
import theme from "../../theme";

export const Header: FC = () => {
    return (
        <>
            <Box sx={styles.links}>
                <Link
                    variant="h6"
                    to={paths.root}
                    component={NavLink}
                    sx={styles.link}
                >
                    {"Главная"}
                </Link>
                <Link
                    variant="h6"
                    to={paths.currensiesPage}
                    component={NavLink}
                    sx={styles.link}
                >
                    {"Курс"}
                </Link>
                <Link
                    variant="h6"
                    to={paths.exchangePage}
                    component={NavLink}
                    sx={styles.link}
                >
                    {"Обмен валют"}
                </Link>
            </Box>
        </>
    )
}

const styles = {
    links: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        [theme.breakpoints.up('xs')]: {
            flexDirection: "row",
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "column",
        },
    } as SxProps<Theme>,
    link: {
        padding: "8px 12px",
        
        mb: "8px",
        width: "100%",
        textDecoration: "none",
        borderRadius: "4px",
        backgroundColor: "white",
        whiteSpace: "nowrap",
        textAlign: "center",
        [theme.breakpoints.up('xs')]: {
            margin: "0 8px 0 0",
            width: "50%",
            ":last-of-type": {
                margin: "0",
            }
        },
        [theme.breakpoints.up('md')]: {
            width: "100%",
            margin: "0",
            mb: "8px",
            textAlign: "start",
        },
        ":hover": {
            color: "white",
            backgroundColor: palette.fill.secondary
        },
    } as SxProps<Theme>
}