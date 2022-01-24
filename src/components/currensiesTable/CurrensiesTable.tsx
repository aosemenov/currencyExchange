import { FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { DashboardWorkBox } from "../dashboardWorkBox";

import { fetchExchangeRates } from "../../store/exchangeRates";
import { fetchCurrensies } from "../../store/currensies";
import { Box, SxProps, Theme } from "@mui/material";

import * as globalStyles from "../../const/styles";
import { palette } from "../../theme/colors";

export const CurrensiesTable: FC = () => {
    const dispatch = useAppDispatch()

    const exchangeRates = useAppSelector(state => state.exchangeRates.payload)
    const statusExchange = useAppSelector(state => state.exchangeRates.isLoading)
    const errorExchange = useAppSelector(state => state.exchangeRates.error)
    const currensies = useAppSelector(state => state.currensies.payload)

    const [date, setDate] = useState<string>()

    useEffect(() => {
        if (!currensies && !exchangeRates) {
            dispatch(fetchExchangeRates())
            dispatch(fetchCurrensies())
        }
    }, [dispatch, currensies, exchangeRates])

    if (exchangeRates && !date) {
        setDate((new Date(exchangeRates.timestamp * 1000)).toDateString())
    }

    const TableLeftSide: FC = () => {
        return (
            <>
                {currensies && exchangeRates && (
                    <Table sx={styles.table} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{"ID"}</TableCell>
                                <TableCell>{"Currency"}</TableCell>
                                <TableCell>{"Code"}</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(currensies).map((code, index) => {
                                if (code in exchangeRates.rates) return (
                                    <TableRow key={code}>
                                        <TableCell component="th" scope="row">{index}</TableCell>
                                        <TableCell>{currensies[code]}</TableCell>
                                        <TableCell>{code}</TableCell>
                                    </TableRow>
                                )
                            })
                            }
                        </TableBody>
                    </Table>
                )}
            </>
        )
    }

    const TableRightSide: FC = () => {
        return (
            <>
                {exchangeRates && currensies && (
                    <Table sx={styles.table} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{"Level"}</TableCell>
                                <TableCell>{"Units"}</TableCell>
                                <TableCell>{"Date"}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(exchangeRates.rates).map((code) => {
                                if (code in currensies) return (
                                    <TableRow key={code}>
                                        <TableCell>{exchangeRates.rates[code]}</TableCell>
                                        <TableCell>{`${code} / ${exchangeRates.base}`}</TableCell>
                                        <TableCell>{date}</TableCell>
                                    </TableRow>
                                )
                            })
                            }
                        </TableBody>
                    </Table>
                )}
            </>
        )
    }

    return (
        <DashboardWorkBox
            isLoading={statusExchange}
            error={errorExchange}
        >
            <TableContainer sx={styles.tableContainer} component={Paper}>
                <Box sx={styles.tableWrapper}>
                    <TableLeftSide />
                    <TableRightSide />
                </Box>
            </TableContainer>
        </DashboardWorkBox>
    )
}

const styles = {
    tableWrapper: {
        display: "flex",
        minWidth: "715px",
        height: "650px",
    } as SxProps<Theme>,
    tableContainer: {
        width: "100%",
        ...globalStyles.scrollStyles
    } as SxProps<Theme>,
    table: {
        width: "50%",
        height: "650px",
    } as SxProps<Theme>,
}