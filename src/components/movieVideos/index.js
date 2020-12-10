import React from "react";
import useMovieVideos from "../../hooks/useMovieVideos";
import "./movieVideos.css";

const MovieVideos =  ({ movie }) => {
    
    const videos = useMovieVideos(movie.id)[0];

    return (
        <>
             {videos.map(video => (
            <iframe src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    frameBorder='0'
                    allowFullScreen
                    className="video"
            />
        ))}
        </>
    );
};

export default MovieVideos;