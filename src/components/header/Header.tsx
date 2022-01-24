import { FC } from "react";
import { NavLink } from 'react-router-dom';
import { Link, Box, SxProps, Theme } from "@mui/material";
import { paths } from "../../app/constants/paths";
import { palette } from "../../theme/colors";
import theme from "../../theme";


export const Header: FC = () => {
    return (
        <>
            <Box sx={styles.links}>
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
        flexDirection: "row",
        flexWrap: "nowrap",
        [theme.breakpoints.up('md')]: {
            flexDirection: "column",
        },
    } as SxProps<Theme>,
    link: {
        padding: "8px 12px",
        margin: "0 8px 0 0",
        width: "50%",
        textDecoration: "none",
        borderRadius: "4px",
        backgroundColor: "white",
        whiteSpace: "nowrap",
        textAlign: "center",
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
        ":last-of-type": {
            margin: "0",
        }
    } as SxProps<Theme>
}
