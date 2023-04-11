import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchMovieDetails } from '../components/api';
import MoviesContainer from './MoviesContainer';

const MovieInfo = () => {
    const [movie, setMovie] = useState(null);
    const { params } = useRoute();
    const { movieId } = params;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovieDetails(movieId).then((movie) => {
            setMovie(movie);
            setLoading(false);
        });
    }, [movieId]);



    if (!movie) {
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            <Text className="text-red-600">{movie.title}</Text>
        </View>
    );
};

export default MovieInfo;
