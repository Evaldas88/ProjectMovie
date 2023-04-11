import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MoviesContainer from '../components/MoviesContainer';
import { fetchPopularMovies, fetchUpcomingMovies, fetchTopRatedMovies } from '../components/api';


const Movies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        })
    }, [])

    //Fetch popular movies
    useEffect(() => {
        fetchPopularMovies().then((movies) => {
            setPopularMovies(movies);
            setLoading(false);
        });
    }, []);

    //Fetch upcoming movies
    useEffect(() => {
        fetchUpcomingMovies().then((movies) => {
            setUpcomingMovies(movies);
            setLoading(false);
        });
    }, []);


    //Fetch top rated movies
    useEffect(() => {
        fetchTopRatedMovies().then((movies) => {
            setTopRatedMovies(movies);
            setLoading(false);
        });
    }, []);


    const handleMoviePress = (movieId) => {
        // Handle the movie press event here
        console.log("Movie pressed: ", movieId);
    };


    return (
        <SafeAreaView className="flex-1 bg-white relative">
            {/* Popular movies section */}
            <View className="flex-col items-center justify-between">
                <View>
                    <Text className="text-[25px] text-[#0B646B] mt-4 mb-5">Popular Movies</Text>
                </View>
            </View>
            <ScrollView horizontal={true}>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    popularMovies?.map(movie => (
                        <MoviesContainer
                            key={movie.id}
                            title={movie.title}
                            poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            onPress={() => handleMoviePress(movie.id)}
                        />
                    ))
                )}
            </ScrollView>
            {/* Upcoming movies section */}
            <View className="flex-col items-center justify-between">
                <View>
                    <Text className="text-[25px] text-[#0B646B] mb-5">
                        Coming Soon To Theaters </Text>
                </View>
            </View>
            {/* Movies Container */}
            <ScrollView horizontal={true}>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    upcomingMovies?.map(movie => (
                        <MoviesContainer
                            key={movie.id}
                            title={movie.title}
                            poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            onPress={() => handleMoviePress(movie.id)}
                        />
                    ))
                )}
            </ScrollView>
            {/* top rated movies section */}
            <View className="flex-col items-center justify-between">
                <View>
                    <Text className="text-[25px] text-[#0B646B] mb-5">Top Rated Movies</Text>
                </View>
            </View>
            {/* Movies Container */}
            <ScrollView horizontal={true}>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    topRatedMovies?.map(movie => (
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
