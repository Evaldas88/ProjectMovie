import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
 
const MoviesContainer = ({ title, poster_path, releaseDate, rating, onPress  }) => {
  
    return (
        <TouchableOpacity onPress={onPress}> 
            <View className={`w-32 h-36 p-2  shadow-sm rounded-full items-center justify-center`}>
                <Image source={{ uri: poster_path }} 
                className="w-full h-full object-fill "
                  />
                <Text className="text-[#00BCC9] pt-1  text-[15px]  ">{title}</Text>
                <Text className="text-[#00BCC9]  text-[15px] font-semibold">{releaseDate}</Text>
                <Text className="text-[#00BCC9] text-[15px] font-semibold">{rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MoviesContainer;
