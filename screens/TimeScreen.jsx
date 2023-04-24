import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const TimeScreen = () => {

    const [currentDate, setCurrentDate] = useState('');

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


    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>
                        Current Date Time
                    </Text>
                    <Text style={styles.textStyle}>
                        {currentDate}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
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
  });

export default TimeScreen;

