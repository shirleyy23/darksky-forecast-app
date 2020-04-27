import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#100452',
    },
    secondary: {
      main: '#05001f',
    },
    error: {
      main: red.A700,
    },
  },
  spacing: 4,
});

export default responsiveFontSizes(CustomTheme);
