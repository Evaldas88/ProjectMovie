import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { auth } from '../firebase';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigat = useNavigation();

    useEffect(() => {
      const unsubscribe =  auth.onAuthStateChanged(user => {
            if (user){
               navigat.navigate("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleSingUP = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user
            })
            .catch(error => alert(error.message))
    }

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <KeyboardAvoidingView>
            <View className="flex-1 items-center mt-72   justify-center  ">
                <TextInput
                    className="border-2 border-gray-500 p-2 rounded-md w-52 mb-5"
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    className="border-2 border-gray-500 p-2 rounded-md w-52 mb-44"
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <View className="flex-1 gap-2 items-center justify-center ">
                    <TouchableOpacity
                        onPress={handleLogin}
                        className="absolute bottom-20 w-32 h-9 border bg-[#2e7b23]
                         rounded-2xl items-center justify-center">
                        <Text className="text-white text-[15px]">Login</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-1 gap-2 items-center justify-center mt-14">
                    <TouchableOpacity
                        onPress={handleSingUP}
                        className="absolute bottom-20 w-32 h-9 border bg-[#2e7b23]
                         rounded-2xl items-center justify-center ">
                        <Text className="text-white text-[15px]">Register</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen