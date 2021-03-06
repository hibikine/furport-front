const darkTheme = {
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      '"Helvetica Neue"',
      "Arial",
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      "Meiryo",
      "sans-serif",
    ].join(","),
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#005CAF",
    },
    secondary: {
      main: "#566C73",
    },
    error: {
      main: "#C1328E",
    },
    warning: {
      main: "#8B81C3",
    },
    info: {
      main: "#2EA9DF",
    },
    success: {
      main: "#00AA90",
    },
    background: {
      default: "#08192D",
      paper: "#0F2540",
    },
  },
};

export default darkTheme;
