import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {

    const navigation = useNavigation();

 



    return (
        <SafeAreaView className="bg-white  flex-1 relative">
            {/* First Section */}
            <View className="flex-row px-6 mt-16 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center" >
                    <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
                </View>
                <Text className=" text-[#2A2B4B] text-3xl font-semibold">Movie</Text>
            </View>
            {/* Second Section */}

            <View className="px-6 mt-8 space-y-3">
                <Text className=" text-[#3C6072] text-[42px]" >CIa bus tekstas</Text>
                <Text className=" text-[#3C6072] text-[38px] font-bold" >Cia tekstas</Text>
                <Text className="text-[#3C6072]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
            </View>
            {/* Circle Section */}
            <View className="w-[300px] h-[300px] bg-[#4DABB7] rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[300px] h-[300px] bg-[#fab01e] rounded-full absolute -bottom-28 -left-28"></View>
            {/* Image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="pulse"
                    easing="ease-in-out"
                    source={{
                        uri: "https://cdn.pixabay.com/photo/2015/06/30/08/07/lens-826308_1280.jpg",
                    }}
                    className="w-[350px] h-[350px] object-cover  rounded-full" />
                <TouchableOpacity 
                onPress={() => navigation.navigate("Movie")}
                className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#1b4714] rounded-full items-center justify-center">
                        <Animatable.View
                            animation={"pulse"}
                            easing="ease-in-out"
                            iterationCount={"infinite"}
                            className="w-20 h-20 justify-center items-center rounded-full  bg-[#1b4714]">
                            <Text className="text-[#da9b54] text-[20px] font-semibold">Browse</Text>
                        </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}



export default HomeScreen