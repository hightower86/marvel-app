import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { RootState } from '../redux-toolkit/store';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 400,
  },
});

export default function HeroCard({ name, description, path, extension }: any) {
  const classes = useStyles();

  const { isLoading } = useSelector((state: RootState) => state.comics)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {isLoading ? <Skeleton height={300} />
          :
          <CardMedia
            className={classes.media}
            image={`${path}.${extension}`}
            title={name}
          />
        }
        {isLoading ? <Skeleton height={100} />
          :
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>}
      </CardActionArea>
    </Card>
  );
}
