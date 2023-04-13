import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchMovieDetails, fetchMovieVideo, fetchRelatedMovies } from '../components/api';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MoviesContainer from './MoviesContainer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { handleSignOut } from '../screens/LogOut';

const MovieInfo = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const [relatedMovies, setRelatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const { params } = useRoute();
    const { movieId } = params;
    const navigation = useNavigation();


    useEffect(() => {
        setLoading(true);
        fetchMovieDetails(movieId).then((movies) => {
            setMovieDetails(movies);
            setLoading(false);
        });

        fetchRelatedMovies(movieId).then((movies) => {
            setRelatedMovies(movies.results);
            setLoading(false);
        });
    }, [movieId]);

    const moviePlay = () => {
        fetchMovieVideo(movieId).then((videoData) => {
            const youtubeKey = videoData.results[0].key;
            navigation.navigate('VideoPlayer', { youtubeKey: youtubeKey });
        });
    };

    const handleMoviePress = (id) => {
        navigation.navigate('MovieInfo', { movieId: id });
    };
    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-6">
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    <View className="flex-1   bg-white shadow-lg">
                        <View>
                            <View className=" flex-wrap content-end    mt-2 h-4 w-2/3  ">
                                <TouchableOpacity className=" flex-wrap  " onPress={() => handleSignOut(navigation)}>
                                    <AntDesign className="text-red-800" name='login' />
                                    <Text className="text-[#4DABB7] text-center ml-1  text-[12px]">Log out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}` }}
                            className="w-full h-56"
                            resizeMode="stretch"
                        />
                        <View className="p-4">
                            <Text className="text-left text-[22px] text-[#0B646B] mb-4">Description</Text>
                            <Text className="text-[12px] text-[#163d40]">{movieDetails.overview}</Text>
                        </View>
                        <TouchableOpacity onPress={moviePlay}  className="bg-red-500  p-2">
                            <Text className="text-white font-semibold text-center" >PLAY TRAILER</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {/* top rated movies section */}
                <View className="flex-col items-center justify-between">
                    <View>
                        <Text className="text-[22px] text-[#0B646B] mt-12 ">Similar movies</Text>
                    </View>
                </View>
            </ScrollView>
            {/* Movies Container */}
            <ScrollView horizontal={true}>
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    relatedMovies?.map(movie => (
                        <MoviesContainer
                            key={movie.id}
                            title={movie.title}
                            poster_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            onPress={() => handleMoviePress(movie.id)}
                        />
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MovieInfo;