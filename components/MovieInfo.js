import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchMovieDetails, fetchMovieVideo } from '../components/api';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieInfo = () => {
    const [movie, setMovie] = useState(null);
    const { params } = useRoute();
    const { movieId } = params;
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
     useEffect(() => {
        fetchMovieDetails(movieId).then((movie) => {
            setMovie(movie);
            setLoading(false);
         });
    }, [movieId]);

    
    const moviePlay = () => {
        fetchMovieVideo(movieId).then((videoData) => {
          const youtubeKey = videoData.results[0].key;
          navigation.navigate('VideoPlayer', { youtubeKey: youtubeKey });
          console.log(youtubeKey)
        });
      };

    return (
        < SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-6" >
                {loading ? (
                    <Text>Loading...</Text>
                ) : (
                    <View className="flex-1 relative bg-white shadow-lg">
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
                            className="w-full  h-56    "
                            resizeMode="stretch"
                        />
                        <View className="p-4">
                            <Text className="text-left text-[#0B646B]   mb-4 ">Description</Text>
                            <Text className="text-[12px] text-[#163d40]" >{movie.overview}</Text>
                        </View>
                        <TouchableOpacity onPress={moviePlay} style={{ backgroundColor: 'red', padding: 10 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>PLAY</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MovieInfo;
