import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const nav = useNavigation();

    return(
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%' }}>
                Home Screen
            </Text>

            <TouchableOpacity
                onPress={() => nav.navigate('Time')}
                style={{
                    backgroundColor: 'green',
                    padding: 10,
                    marginTop: '10%',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: 'white'
                }}>
                    Time
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => nav.navigate('Welcome')}
                style={{
                    backgroundColor: 'green',
                    padding: 10,
                    marginTop: '10%',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: 'white'
                }}>
                    Welcome
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => nav.navigate('Image')}
                style={{
                    backgroundColor: 'green',
                    padding: 10,
                    marginTop: '10%',
                    width: '50%',
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    color: 'white'
                }}>
                    Image
                </Text>
            </TouchableOpacity>

        </View>
    );

};

export default HomeScreen;