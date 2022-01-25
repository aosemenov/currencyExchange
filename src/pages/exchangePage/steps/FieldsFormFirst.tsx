import { FC, useEffect } from "react";

import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchCurrensies } from "../../../store/currensies";

import { Box, InputLabel, MenuItem, Select, SxProps, TextField, Theme } from "@mui/material";

import { DashboardBox } from "../../../components/dashboardBox";

type IProps = {
    disabled: boolean
}

export const FieldsFormFirst: FC<IProps> = ({
    disabled
}) => {
    const { register, formState } = useFormContext()
    const { errors } = formState

    const status = useAppSelector(state => state.currensies.isLoading)
    const error = useAppSelector(state => state.currensies.error)
    const currensies = useAppSelector(state => state.currensies.payload)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!currensies) {
            dispatch(fetchCurrensies())
        }
    }, [dispatch, currensies])

    return (
        <DashboardBox
            isLoading={status}
            error={error}
        >
            {currensies && (
                <Box>
                    <Box sx={styles.formFieldRow}>
                        <Box sx={styles.formField}>
                            <InputLabel id="demo-simple-text-field-label"
                                required>Сумма</InputLabel>
                            <TextField
                                type={'number'}
                                variant={'outlined'}
                                autoComplete={'off'}
                                disabled={disabled}
                                defaultValue=""
                                inputProps={{ inputMode: 'numeric'}}
                                {...register("currensiesInfo.sum", {
                                    required: "Заполните обязательное поле",
                                    validate: value => value > 0 || "Значение суммы не может быть отрицательным"
                                })}
                            />
                            <Box sx={styles.errorMessage}>
                                <ErrorMessage errors={errors} name="currensiesInfo.sum" />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.formFieldRow}>
                        <Box sx={styles.formField}>
                            <InputLabel id="demo-simple-select-label" required>Валюта</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                sx={{ display: "block" }}
                                type={"text"}
                                disabled={disabled}
                                {...register("currensiesInfo.currencyfrom", {
                                    required: "Заполните обязательное поле"
                                })}
                            >
                                {Object.keys(currensies).map((code, index) => (
                                    <MenuItem
                                        key={code}
                                        value={code}
                                    >
                                        {`${code} «${currensies[code]}»`}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Box sx={styles.errorMessage}>
                                <ErrorMessage errors={errors} name="currensiesInfo.currencyfrom" />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.formFieldRow}>
                        <Box sx={styles.formField}>
                            <InputLabel id="demo-simple-select-label" required>Выберите валюту для конвертации</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                sx={{ display: "block" }}
                                type={"text"}
                                placeholder='Выберите валюту из списка'
                                disabled={disabled}
                                {...register("currensiesInfo.currencyto", {
                                    required: "Заполните обязательное поле"
                                })}
                            >
                                {Object.keys(currensies).map((code, index) => (
                                    <MenuItem
                                        key={code}
                                        value={code}
                                    >
                                        {`${code} «${currensies[code]}»`}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Box sx={styles.errorMessage}>
                                <ErrorMessage errors={errors} name="currensiesInfo.currencyto" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </DashboardBox>
    )
}

const styles = {
    formField: {
        width: "100%"
    } as SxProps<Theme>,
    formFieldRow: {
        display: "flex",
        width: "100%",
        marginBottom: '24px'
    } as SxProps<Theme>,
    errorMessage: {
        fontSize: '12px',
        color: 'error.main',
    } as SxProps<Theme>,
}
