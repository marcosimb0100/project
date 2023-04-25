import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, TouchableOpacity, StyleSheet, TextInput, ToastAndroid } from 'react-native';


const HomeScreen = () => {

    const nav = useNavigation();
    const [currentDate, setCurrentDate] = useState();
    const [user, setUser] = useState('');

    useEffect(() => {
        
        setInterval(() => {
        
            const day = new Date().getDate(); 
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();
            const hours = new Date().getHours();
            const min = new Date().getMinutes();
            const sec = new Date().getSeconds();
            setCurrentDate( `${year.toString()}-${month.toString().padStart(2,'0')}-${day.toString().padStart(2,'0')} ${hours.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`);
        
        }, 1000);

    }, []);
    
    const HandleAccess = () => {

        if(user.length === 0){
            ToastAndroid.showWithGravityAndOffset(`The name is missing`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                25,
                50
            );
        }else{
            ToastAndroid.showWithGravityAndOffset(`Welcome ${user}`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                25,
                50
            );
            setUser('');
            nav.navigate('Welcome');
        }

    };

    return(
        <View>
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: '20%' }}>
                Access
            </Text>

            <TextInput
                style={styles.inputText}
                placeholder='Please enter your first name'
                value={ user }
                onChangeText={ setUser }
            ></TextInput>

            <Text style={styles.textStyle}>Current Date Time</Text>
            <Text style={styles.textStyle}>{currentDate}</Text>

            <TouchableOpacity
                onPress={ () => HandleAccess() }
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
                    Access
                </Text>
            </TouchableOpacity>

        </View>
    );

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      padding: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 18,
      color: 'black',
    },
    inputText:{
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        marginVertical: 15,
        marginHorizontal: '25%'
    }
  });

export default HomeScreen;