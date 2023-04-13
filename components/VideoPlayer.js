import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity,Text } from 'react-native';
import WebView from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { handleSignOut } from '../screens/LogOut';
import { useNavigation } from '@react-navigation/native';

const VideoPlayer = ({ route }) => {
    const { youtubeKey } = route.params;

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1" >
                <View className="flex-1 mt-44">
                    <View>
                        <View className=" flex-wrap content-end    mt-2 h-4 w-2/3  ">
                            <TouchableOpacity className=" flex-wrap  " onPress={() => handleSignOut(navigation)}>
                                <AntDesign   name='login' />
                                <Text className="text-[#4DABB7] text-center ml-1  text-[12px]">Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <WebView
                        className="w-full h-[300px]"
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        mediaPlaybackRequiresUserAction={false}
                        source={{ uri: `https://www.youtube.com/embed/${youtubeKey}?controls=1` }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default VideoPlayer;
