import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import imageNasa from '../api/imageApi';

const WelcomeScreen = () => {

    const [ image, setImage ] = useState({});

    const HandleRandomDate = async() => {

        const startDate = new Date(2000,0,1).getTime();
        const endDate =  new Date(2022,0,1).getTime();
        const spaces = (endDate - startDate);
        let timestamp = Math.round(Math.random() * spaces);
        timestamp += startDate;

        let json = await imageNasa('/apod', {
            api_key: 'DEMO_KEY',
            date: `${new Date(timestamp).toISOString().split('T')[0]}`
        });

        setImage( json );
        
    };

    useEffect( () => {
        HandleRandomDate();
    }, [])

    return(
        <View>
            <Text style={ styles.title }>
                Welcome
            </Text>
            <Image source = {{uri: `${image.url}` }}
                    style = {{ width: 200, height: 200, marginTop: '5%', marginHorizontal: '25%' }} />
            <Text style={ styles.title }>
                { image.title }
            </Text>
            <Text style={ styles.text }>
                { image.explanation }
            </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    title: {
        fontSize: 30, 
        textAlign: 'center', 
        marginTop: '10%'
    },
    subtitle: {
        fontSize: 20, 
        textAlign: 'center', 
        marginTop: '5%'
    },
    text: {
        fontSize: 10, 
        textAlign: 'justify', 
        
        marginTop: '5%'
    }
});

export default WelcomeScreen;