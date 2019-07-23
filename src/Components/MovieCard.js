import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function MovieCard() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f24f2adccef9e40187e73a2223da546c&page=${page}`)
            .then(res => {
                console.log(res.data.results);
                setMovies(res.data.results);
            })
            .catch(err => {
                console.error(err);
            })
    }, [page])

    const useStyles = makeStyles({
        card: {
            maxWidth: 345,
            minHeight: 550,
            overflow: 'scroll'
        },
        media: {
            height: 200,
        },
    });

    const classes = useStyles();
    console.log(movies);

    return (
        <>
            <Button size="large" color="primary" onClick={() => {
                page > 0 ? setPage(page - 1) : setPage(1)
            }
            }>
                Previous
                </Button>
            <Button size="large" color="primary" onClick={() => { page < 993 ? setPage(page + 1) : setPage(993) }}>
                Next
                </Button>
            <div className='movie-cards'>

                {movies.map(movie => {
                    return (
                        <Card className={classes.card}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                    title={movie.original_title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie && movie.original_title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {movies && movie.overview}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Add to Favorites
                        </Button>
                            </CardActions>
                        </Card>
                    )
                })}

            </div>
        </>
    )
}
