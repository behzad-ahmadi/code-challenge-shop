import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';

// create theme context
export const ThemeContext = React.createContext({
  mode: '',
  toggleMode: () => {},
  mutate: (mode) => {},
});

// them context provider
export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState('dark');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  });

  React.useEffect(() => {
    if (prefersDarkMode) setMode('dark');
  }, []);

  // create theme by selected mode
  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);

  // toggle theme mode
  const toggleMode = () => setMode(mode == 'dark' ? 'light' : 'dark');

  // mutate theme mode by passign mode
  const mutate = (mode) => setMode(mode);

  return (
    // return initialed theme context provider
    <ThemeContext.Provider value={{ mode, toggleMode, mutate, theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
