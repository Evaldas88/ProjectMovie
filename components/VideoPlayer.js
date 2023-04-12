import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

 const VideoPlayer = ({ route }) => {
    const { videoUrl } = route.params;
  console.log(videoUrl)
    return (
      <View style={{ flex: 1 }}>
        {/* <Video
          source={{ uri: videoUrl }}
          style={{ flex: 1 }}
          resizeMode="contain"
          controls
        /> */}
      </View>
    );
  };
  

export default VideoPlayer;
