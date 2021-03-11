
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom'
import BG from '../images/home-background.jpg'
import BGmob from '../images/home-background.jpg'

const useStyles = makeStyles((theme) => ({

  container: {
    // position: 'relative',
    // width: '100%',
    // minHeight: '100%',
    // overflow: 'auto',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundImage: `url(${BG})`,
    // //background: BG,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'repeat-y',
    // backgroundPosition: 'top center',
    // [theme.breakpoints.down('sm')]: {
    //   backgroundImage: `url(${BGmob})`,
    // },
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
