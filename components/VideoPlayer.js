import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import WebView from 'react-native-webview';

const VideoPlayer = ({ route }) => {
    const { youtubeKey } = route.params;

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="flex-1" >
                <View className="flex-1 mt-44">
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
