import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Movie = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row px-6 mt-16 items-center space-x-2">
                <View>
                    <Text>tes</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Movie