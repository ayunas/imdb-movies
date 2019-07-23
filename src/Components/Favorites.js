import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Favorites(props) {
    console.log('props in favorites', props);
    const classes = useStyles();


    return (
        <section className="moviecards">
            {props.favorites.length ? props.favorites.map(fav => {
                return (
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`https://image.tmdb.org/t/p/w500/${fav.backdrop_path}`}
                                title={fav.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {fav.original_title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {fav.overview}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="default" onClick={() => props.removeFav(fav)}>
                                Remove from Favorites
                                </Button>
                        </CardActions>
                    </Card>
                )
            }) : <div className="message">You don't have any saved favorites</div>}
        </section>

    )
}
