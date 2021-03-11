import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText
  }
}))

interface Props { }

export const Footer = (props: Props) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Button color="inherit">
        <a className={classes.link} href='https://github.com/hightower86/marvel-app' target='blank' rel='noopener noreferrer'>
          Code
              </a>
      </Button>
    </footer>
  )
}

