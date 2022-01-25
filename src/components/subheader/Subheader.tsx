import { FC } from "react";

import { Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/material";

import { IFormStepsItem } from "../../store/types";

interface IProps {
  activeStep: IFormStepsItem
}

const steps = [
  {
    id: "SUM",
    title: "Валюта",
    num: 1
  },
  {
    id: "BANK",
    title: "Реквизиты",
    num: 2
  },
  {
    id: "CHECK",
    title: "Просмотр",
    num: 3
  },
] as Array<{ id: IFormStepsItem, title: string, num: number }>

export const Subheader: FC<IProps> = ({
  activeStep
}) => {

  return (
    <Box sx={styles.steps}>
      {steps.map(step => (
        <Box sx={styles.stepBlock}>
          <Box sx={activeStep === step.id ? { ...styles.step, ...styles.stepActive } : styles.step}>
            <Typography variant={'h6'} sx={{color: 'white'}}>
              {step.num}
            </Typography>
          </Box>
          <Typography variant={'body2'}>
            {step.title}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

const styles = {
  steps: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as SxProps<Theme>,
  stepBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70px",
    mr: "12px",
  } as SxProps<Theme>,
  step: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "text.disabled",
  },
  stepActive: {
    backgroundColor: "primary.main"
  }
}