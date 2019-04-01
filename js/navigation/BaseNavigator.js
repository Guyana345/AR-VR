import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import {Bookmarks, Favorite_airfeilds, Maps, Profile, Settings} from "../components";
import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsBookmarks]: {
        screen: Bookmarks,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="file"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.FavoriteAirfeilds]: {
        screen: Favorite_airfeilds,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="star"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    MultiBar: {
        screen: () => null,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <MultiBarToggle
                    navigation={navigation}
                    actionSize={30}
                    backgroundColor="#FFFFFF"
                    routes={[
                        {
                            routeName: Routes.OtherScreen,
                            color: '#FF8360',
                            icon: (
                                <Icon
                                    name="rocket"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#E8E288',
                            icon: (
                                <Icon
                                    name="dashboard"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#7DCE82',
                            icon: (
                                <Icon
                                    name="gears"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                    ]}
                    icon={(
                        <Icon
                            name="camera"
                            color="#FFFFFF"
                            size={24}
                        />
                    )}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    [Routes.TabsMaps]: {
        screen: Maps,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="map"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsProfile]: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="cog"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarComponent: MultiBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: Settings
}, {
    headerMode: 'none'
}));

export {BaseNavigatorContainer as BaseNavigator};