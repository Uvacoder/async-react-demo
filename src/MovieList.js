import React from 'react';
import { boxOfficeMovies } from './data';
import Spinner from './Spinner';

export default function MovieList(props) {
    return (
        <div className="MovieList">
            <div className="MovieList-header">
                Top Box Office
                <span className="MovieList-popcorn">
                    {'๐ฟ'}
                </span>
            </div>
            {boxOfficeMovies.map(movie => (
                <div className="MovieListItem" key={movie.id} onClick={() => props.onMovieClick(movie.id)}>
                    <span className="MovieListItem-freshness">{movie.fresh ? '๐' : '๐คข'}</span>
                    <div className="MovieListItem-metaWrapper">
                        <span className="MovieListItem-title">{movie.title}</span>
                        <div className="MovieListItem-meta">{movie.rating} ยท {movie.gross}</div>
                    </div>
                    <div className="MovieListItem-action">
                        {props.loadingId === movie.id ?
                            <Spinner /> :
                            <div className="MovieListItem-more">
                                {'๐'}
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}
