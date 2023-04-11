import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, View, Text } from 'react-native';



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
            <View className="flex-row px-6 mt-16 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center" >
                    <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
                </View>
                <Text className=" text-[#2A2B4B] text-3xl font-semibold">Movie</Text>
            </View>
            {/* Second Section */}

        <View>
            <Text>CIa bus tekstas</Text>
        </View>



        </SafeAreaView>
    )
}



export default HomeScreen