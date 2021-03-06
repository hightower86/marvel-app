import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    height: 50,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}))

interface Props { }

export const Footer = (props: Props) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      Footer
    </footer>
  )
}

