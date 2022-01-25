import { FC, useState } from "react";

import { Box, SxProps, Theme } from "@mui/material";
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import theme from "../../theme";

import { CurrensiesTable } from "../../components/currensiesTable";


export const CurrensiesPage: FC = () => {
    const [value, setValue] = useState<Date | null>(null);

    const dateToYMD = () => {
        const d = (new Date()).getDate()
        const m = (new Date()).getMonth() + 1
        const y = (new Date()).getFullYear()
        return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }

    const currentDate = dateToYMD()

    return (
        <Box sx={styles.container}>
            <Box sx={styles.datapickerContainer}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>

                        <DatePicker
                            label="read-only"
                            readOnly
                            value={ value === null ? new Date(currentDate) : value }
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </Box>
            <CurrensiesTable currentDate={currentDate} />
        </Box >
    )
}

const styles = {
    container: {
        width: "100%",
        mt: "24px",
        [theme.breakpoints.up('md')]: {
            margin: "0"
        }
    } as SxProps<Theme>,
    datapickerContainer: {
        width: "250px",
        mb: "24px",
    } as SxProps<Theme>
}
