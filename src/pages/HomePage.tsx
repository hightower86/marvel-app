
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom'
import BG from '../images/home-background.jpg'
import BGmob from '../images/home-background.jpg'

const useStyles = makeStyles((theme) => ({

  container: {

  },

}));

const HomePage = (props: any) => {
  //console.log(props);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Comics characters
     
      <Link to='/characters' >
        Characters
      </Link> */}
    </div>
  )
}

export { HomePage }
