import { FC } from "react";

import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from "react-hook-form";

import { Box, SxProps, TextField, Theme, InputLabel, MenuItem, Select } from "@mui/material";

type IProps = {
    disabled: boolean
}

export const FieldsFormSecond: FC<IProps> = ({
    disabled
}) => {
    const { register, formState } = useFormContext()
    const { errors } = formState

    const banks = [
        {
            id: 1481,
            title: "ПАО «Сбербанк России»",
        },
        {
            id: 1000,
            title: "ПАО Банк «ВТБ»",
        },
        {
            id: 1326,
            title: "АО «Альфа-банк»",
        },
        {
            id: 2673,
            title: "АО «Тинькофф Банк»",
        },
    ] as Array<{ id: number, title: string }>

    return (
        <>
            <Box sx={styles.formFieldRow}>
                <Box sx={styles.formField}>
                    <InputLabel id="select-bank" required>Выберите банк</InputLabel>
                    <Select
                        labelId="select-bank"
                        sx={{ display: "block" }}
                        type={"text"}
                        required
                        defaultValue=""
                        disabled={disabled}
                        {...register("bankAccountInfo.bank", {
                            required: "Заполните обязательное поле"
                        })}
                    >
                        {banks.map(bank => (
                            <MenuItem
                                key={bank.id}
                                value={bank.id}
                            >
                                {bank.title}
                            </MenuItem>
                        ))}
                    </Select>
                    <Box sx={styles.errorMessage}>
                        <ErrorMessage errors={errors} name="bankAccountInfo.bank" />
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.formFieldRow}>
                <Box sx={styles.formField}>
                    <InputLabel required>БИК банка</InputLabel>
                    <TextField
                        type={'number'}
                        defaultValue=""
                        disabled={disabled}
                        variant={'outlined'}
                        autoComplete={'off'}
                        inputProps={{ inputMode: 'numeric'}}
                        {...register("bankAccountInfo.bik", {
                            maxLength: {
                                value: 9,
                                message: "БИК банка не может превышать 9 символов"
                            },
                            required: "Заполните обязательное поле",
                        })}
                    />
                    <Box sx={styles.errorMessage}>
                        <ErrorMessage errors={errors} name="bankAccountInfo.bik" />
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.formFieldRow}>
                <Box sx={styles.formField}>
                    <InputLabel required>Номер счета</InputLabel>
                    <TextField
                        type={'number'}
                        required
                        disabled={disabled}
                        variant={'outlined'}
                        autoComplete={'off'}
                        inputProps={{ inputMode: 'numeric' }}
                        {...register("bankAccountInfo.bankaccount", {
                            maxLength: {
                                value: 20,
                                message: "Длины счета не может превышать 20 символов"
                            },
                            required: "Заполните обязательное поле",
                        })}
                    />
                    <Box sx={styles.errorMessage}>
                        <ErrorMessage errors={errors} name="bankAccountInfo.bankaccount" />
                    </Box>
                </Box>
            </Box>
        </>
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