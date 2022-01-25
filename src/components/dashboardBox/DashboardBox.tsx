import { FC } from "react";

import { IError } from "../../store/types";

import { CircularProgress, Slide, Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";

interface IProps {
    error?: IError
    isLoading: boolean
    isLock?: boolean
}

export const DashboardBox: FC<IProps> = ({
    error,
    isLoading,
    isLock,
    children
}) => {

    if (!isLoading && !error && (isLock === undefined || (isLock === false)) && children) {
        return (
            <Slide direction='up' in={true}>
                <Box sx={styles.contentWarapper}>
                    {children}
                </Box>
            </Slide>
        )
    }

    if (error)
    return (
        <Box sx={styles.wrapper}>
            <Box sx={styles.loadingContainer}>
                <CircularProgress sx={styles.error} />
                <Typography variant='h6'>
                    {`DashboardBox Error: ${error.message}`}
                </Typography>
            </Box>
        </Box>
    )

    if (isLoading && isLock) {
        return (
            <Box sx={styles.wrapper}>
                <Box sx={styles.loadingContainer}>
                    <CircularProgress sx={styles.progress} />
                    <Typography variant='h6'>
                        {"Загрузка..."}
                    </Typography>
                </Box>
            </Box>
        )
    }

    if (isLoading) {
        return (
            <Box sx={styles.wrapper}>
                <Box sx={styles.loadingContainer}>
                    <CircularProgress sx={styles.progress} />
                    <Typography variant='h6'>
                        {"Загрузка..."}
                    </Typography>
                </Box>
            </Box>
        )
    }
    return null
}

const styles = {
    progress: {
        color: "primary.main",
    } as SxProps<Theme>,
    error: {
        color: "error.main",
    } as SxProps<Theme>,
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    } as SxProps<Theme>,
    loadingContainer: {
        display: "flex",
        alignItems: "center",
        height: "70px",
        gap: "10px"
    } as SxProps<Theme>,
    contentWarapper: {
        width: "100%",
        height: "100%"
    } as SxProps<Theme>
}