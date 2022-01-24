import { FC } from "react";
import { SxProps } from '@mui/system';
import { Container, Theme } from "@mui/material";

export const Wrapper: FC = ({
    children
}) => {
    return (
        <Container sx={styles.root}>
            {children}
        </Container>
    )
}

const styles = {
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        height: "100%",
        maxWidth: "1280px",
        minHeight: "100vh",
    } as SxProps<Theme>,
}
