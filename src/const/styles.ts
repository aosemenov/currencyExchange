
import { palette } from "../theme/colors";

export const scrollStyles = {
  ":hover": {
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: palette.fillLight.greyLight
    }
  },
  "&::-webkit-scrollbar": {
    width: "5px",
    height: "5px"
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: palette.transparent.default,
    borderRadius: "10px"
  }
}