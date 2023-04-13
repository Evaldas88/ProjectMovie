
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { auth } from '../firebase';
import { Logo } from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { handleSignOut } from './LogOut';

const HomeScreen = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    
    return (
        <SafeAreaView className="bg-white  flex-1 relative">
            {/* First Section */}
            <View className="flex-row px-6 mt-16  items-center space-x-2">
                <View className="items-center  content-center">
                    <View className=" flex-1 w-28 h-6 bg-[#4DABB7] rounded-2xl items-center justify-center" >
                        <Text className="text-white text-[8px] font-semibold">User: {auth.currentUser?.email} </Text>
                    </View>
                    <View className=" flex-wrap   content-center   mt-2 h-4 w-2/3  ">
                        <TouchableOpacity  className=" flex-wrap  " onPress={() => handleSignOut(navigation)}>
                            <AntDesign className="text-red-800" name='login' />
                            <Text className="text-[#4DABB7] text-center ml-1  text-[12px]">Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text className=" text-[#2A2B4B] text-3xl font-semibold">Movie App</Text>
            </View>
            {/* Second Section */}
            <View className="px-6 mt-8 space-y-3">
            </View>
            {/* Circle Section */}
            <View className="w-[300px] h-[300px] bg-[#4DABB7] rounded-full absolute bottom-36 -right-36"></View>
            <View className="w-[300px] h-[300px] bg-[#fab01e] rounded-full absolute -bottom-28 -left-28"></View>
            {/* Image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="pulse"
                    easing="ease-in-out"
                    source={Logo}
                    className="w-[350px] h-[350px] object-cover  rounded-full" />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Movies")}
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