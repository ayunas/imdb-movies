import React from 'react';
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
        width: 345,
        height: 500
    },
    media: {
        height: 140,
    },
});

function Results(props) {
    console.log('results props', props.results);
    const classes = useStyles();

    return (
        <section className="moviecards">
            {props.results.length ? props.results.map(movie => {
                return (
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                title={movie.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {movie.original_title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {movie.overview}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="default" onClick={() => props.addFav(movie)}>
                                Add to Favorites
                            </Button>
                        </CardActions>
                    </Card>
                )
            }) : <div className="message"> No results found </div>}
        </section>
    )
}

export default Results;
