import { FC, useCallback, useEffect, useState } from "react";

import { FieldsFormSecond } from "./steps/FieldsFormSecond";
import { IData } from "../../store/types";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { paths } from "../../app/constants/paths";

import { Button, StepLabel, Typography, Step, Box, Stepper, SxProps, Theme, useMediaQuery } from "@mui/material";
import theme from "../../theme";

import { FieldsFormFirst } from "./steps/FieldsFormFirst";


const steps = ['Сумма / Валюта', 'Банк / Реквизиты', 'Проверка'];

export const ExchangePage: FC = () => {
    const history = useNavigate()

    const [activeStep, setActiveStep] = useState<number>(0)
    const [data, setData] = useState<IData>()

    const disabled = (activeStep === 2 ? true : false)
    const methods = useForm<IData>({
        mode: "onBlur",
    })
    const matches = useMediaQuery('(min-width:568px)')

    const sum = methods.watch('currensiesInfo.sum')
    const curr_to = methods.watch('currensiesInfo.currencyfrom')
    const curr_from = methods.watch('currensiesInfo.currencyto')

    const bank = methods.watch('bankAccountInfo.bank')
    const bik = methods.watch('bankAccountInfo.bik')
    const bank_account = methods.watch('bankAccountInfo.bankaccount')

    const handleNext = useCallback((event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, [])

    const handleBack = useCallback((event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, [])

    const handleCancel = useCallback((event: React.FormEvent<HTMLElement>) => {
        event.preventDefault()
        history(paths.root)
    }, [history])

    const handleReset = useCallback(() => {
        methods.reset()
        setActiveStep(0)
    }, [methods])

    const onSubmit = useCallback((payload: IData) => {
        handleReset()
        setData(payload)
        history(paths.root)
    }, [history, handleReset])

    useEffect(() => {
        if (data) {
            alert(JSON.stringify(data))
            // dispatch(fetchData)
        }
    }, [data])

    return (
        <Box sx={styles.container}>
            <Stepper activeStep={activeStep} sx={styles.stepper}>
                {steps.map((label, index) => {
                    return (
                        <Step key={index} sx={styles.stepBlock}>
                            <StepLabel>{label}</StepLabel>
                            {activeStep === index && (
                                <Typography sx={matches ? styles.step : styles.isHidden}>Шаг {activeStep + 1}</Typography>
                            )}
                        </Step>
                    );
                })}
            </Stepper>
            <FormProvider {...methods} >
                <Box
                    component={'form'}
                    onSubmit={methods.handleSubmit(onSubmit)}
                    sx={styles.form}
                >

                    <Box sx={activeStep === 1 ? styles.isHidden : styles.isShow}>
                        <FieldsFormFirst disabled={disabled} />
                    </Box>

                    <Box sx={activeStep === 0 ? styles.isHidden : styles.isShow}>
                        <FieldsFormSecond disabled={disabled} />
                    </Box>

                    <Box sx={styles.formNavigate}>
                        <Button
                            variant="outlined"
                            disabled={false}
                            onClick={handleCancel}
                        >
                            {'Отмена'}
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button
                            color="inherit"
                            sx={{ mr: '15px' }}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            {'Назад'}
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button variant="contained" type="submit">
                                {'Отправить'}
                            </Button>
                        ) : (activeStep === steps.length - 3 ? (
                            <Button
                                variant="contained"
                                disabled={sum && curr_to && curr_from ? false : true}
                                type="button"
                                onClick={handleNext}
                            >
                                {'Далее'}
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                disabled={bank && bik && bank_account ? false : true}
                                type="button"
                                onClick={handleNext}
                            >
                                {'Далее'}
                            </Button>
                        )
                        )}
                    </Box>
                </Box>
            </FormProvider>
        </Box>
    )
}

const styles = {
    form: {
        mt: "40px",
        padding: "20px"
    } as SxProps<Theme>,
    isHidden: {
        display: "none"
    } as SxProps<Theme>,
    isShow: {
        display: "block"
    } as SxProps<Theme>,
    stepper: {
        flexDirection: "column",
        [theme.breakpoints.up('xs')]: {
            flexDirection: "row"
        }
    } as SxProps<Theme>,
    step: {
        mt: 2,
        mb: 1,
        position: 'absolute'
    } as SxProps<Theme>,
    formNavigate: {
        display: 'flex',
        flexDirection: 'column-reverse',
        margin: 0,
        pt: 2,
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'row',
        }
    } as SxProps<Theme>,
    stepBlock: {
        mb: "12px"
    } as SxProps<Theme>,
    container: {
        width: "100%",
        mt: "24px",
        [theme.breakpoints.up('md')]: {
            margin: "0"
        }
    } as SxProps<Theme>,
}