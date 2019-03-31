import React, { Component, Fragment } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { Button, Card, Header } from 'react-native-elements';
import MainScene from './fling_vr/MainScene';



const list = [
    {
      place_name: 'Toong Sri Kan Airfeild',
      image_url:'./images/1.JPG',
      description: 'Flying here costs 200THB per pilot, for unlimited hours. Contact 0968574434.',
    },
    {
        place_name: 'Toong Sri Kan Airfeild',
        image_url:'./images/1.JPG',
        description: 'Flying here costs 200THB per pilot, for unlimited hours. Contact 0968574434.',
    },
    {
        place_name: 'Toong Sri Kan Airfeild',
        image_url:'./images/1.JPG',
        description: 'Flying here costs 200THB per pilot, for unlimited hours. Contact 0968574434.',
      },
  ]

class Favorite_airfeilds extends Component {
    state = {
        onShowVR: false,
    }

    onShow = () => {
        this.setState((prevState) => ({
            onShowVR: true,
        }));
    }

    onClose = () => {
        this.setState((prevState) => ({
            onShowVR: false,
        }));
    }

    render() {
        return (
            <View>
           
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Header centerComponent={{ text: 'Suggested Places', style: { color: '#fff',fontSize:18 } }}/>
            <ScrollView>
            {
              list.map((item, i) => {
                  const { place_name, description } = item;
                  return (
                        <Card
                          key={i}
                          title={place_name}
                          image={require('./images/1.JPG')}>
                          <Text style={{marginBottom: 10}}>
                          {description}
                          </Text>
                          <Button
                           backgroundColor='#03A9F4'
                           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                           onPress={() => this.onShow()}
                           title='Inspect in VR' />
                        </Card>
                         
                  )
              })
            }
                
            <Fragment>
                { // Add a Popover to have a smooth effect yarn add react-popover or leave it.
                    <MainScene onShow={this.state.onShowVR} onClose={this.onClose()} />
                }
            </Fragment>
             </ScrollView>
             </View>
        );
    }
}
export { Favorite_airfeilds };

