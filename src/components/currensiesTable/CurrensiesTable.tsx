import { FC, useEffect, useState } from "react";


import { fetchExchangeRates } from "../../store/exchangeRates";
import { fetchCurrensies } from "../../store/currensies";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, SxProps, Theme } from "@mui/material";

import { DashboardBox } from "../dashboardBox";

import * as globalStyles from "../../const/styles";

type IProps = {
    currentDate: string
}

export const CurrensiesTable: FC<IProps> = ({
    currentDate
}) => {
    const dispatch = useAppDispatch()

    const exchangeRates = useAppSelector(state => state.exchangeRates.payload)
    const statusExchange = useAppSelector(state => state.exchangeRates.isLoading)
    const errorExchange = useAppSelector(state => state.exchangeRates.error)
    const currensies = useAppSelector(state => state.currensies.payload)

    const [date, setDate] = useState<string>()

    useEffect(() => {
        if (!currensies) {
            dispatch(fetchCurrensies())
        }
        if (!exchangeRates) {
            dispatch(fetchExchangeRates(currentDate))
        }
    }, [dispatch, currensies, exchangeRates, currentDate])

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
                                return code
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
                                return code
                            })
                            }
                        </TableBody>
                    </Table>
                )}
            </>
        )
    }

    return (
        <DashboardBox
            isLoading={statusExchange}
            error={errorExchange}
        >
            <TableContainer sx={styles.tableContainer} component={Paper}>
                <Box sx={styles.tableWrapper}>
                    <TableLeftSide />
                    <TableRightSide />
                </Box>
            </TableContainer>
        </DashboardBox>
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
    } as SxProps<Theme>,
}