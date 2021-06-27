import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3E23FF",
    },
    secondary: {
      main: "#343A48",
    },
  },
  typography: {
    h1: {
      fontSize: "70px",
      fontFamily: [
        "Poppins",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        "Space Grotesk",
        "Founders Grotesk",
      ].join(","),
    },
  },
  breakpoints: {
    xm: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1920,
  },
});

export default theme;
