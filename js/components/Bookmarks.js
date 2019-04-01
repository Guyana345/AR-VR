import React, {Component} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {randomColor} from "../utils/index";
import { StatusBar } from 'react-native';

class Bookmarks extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1
            }}>
             <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Text>Working on laws to go here</Text>
            </SafeAreaView>
        );
    }
}

export {Bookmarks};