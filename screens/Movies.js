import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MoviesContainer from '../components/MoviesContainer';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=484eecec06bfa588a660f7daeb26a3de";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        })
    }, [])

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                setMovies(json.results);
                setLoading(false);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const handleMoviePress = (movieId) => {
        // Handle the movie press event here
        console.log("Movie pressed: ", movieId);
    };

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-col px-6 mt-16 items-center justify-between">
                <View>
                    <Text className="text-[30px] text-[#0B646B]">Top Movies</Text>
                </View>
            </View>
            {/* Menu Container */}
            <ScrollView horizontal={true}>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    movies?.map(movie => (
                        <MoviesContainer
                            key={movie.id}
                            title={movie.title}
                            poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            onPress={() => handleMoviePress(movie.id)}
                        />
                    ))
                )}
            </ScrollView>
        </SafeAreaView >
    );
};

export default Movies;
