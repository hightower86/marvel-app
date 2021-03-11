import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#171548'
    },
    background: {
      paper: 'rgba(8, 12, 59, 0.796)'
    },
    text: {
      primary: '#d5d5d5',
      secondary: '#a3a3a3'
    }
  },
  mixins: {
    toolbar: {

      minHeight: 40
    }

  }
})