import React from 'react';
import { Link } from "react-router-dom";
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { faBold } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.dark,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

const Gridlist = ({movies}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={3.5} cellHeight={600}>
            {movies.map((movie) => (
              <GridListTile key={movie.poster_path}>
                <Link to={`/movies/${movie.id}`}>
                    <img src={
                        movie.poster_path ?
                        `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        :
                        require("./film-poster-placeholder.png")
                    } 
                        alt={movie.title} />
                </Link>
                <GridListTileBar
                  title={movie.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton aria-label={`star ${movie.title}`}>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );

}

export default Gridlist;