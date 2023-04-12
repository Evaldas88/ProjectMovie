import React from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const VideoPlayer = ({ route }) => {
    const { youtubeKey } = route.params;
    console.log(youtubeKey)

    return (
        <SafeAreaView className="flex-1">
            <WebView
                className="w-full h-1"
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: `https://www.youtube.com/embed/${youtubeKey}` }}
            />
        </SafeAreaView>
    );
};

export default VideoPlayer;
