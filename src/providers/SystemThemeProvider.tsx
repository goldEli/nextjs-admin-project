import { baselightTheme } from "@/utils/theme/DefaultColors";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const SystemThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={baselightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default SystemThemeProvider;
