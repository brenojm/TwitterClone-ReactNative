import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Spaces } from '../screens/Spaces';
import { Notifications } from '../screens/Notifications';
import { Message } from '../screens/Message';

import HomeIcon from "../assets/icons/home.png";
import SearchIcon from "../assets/icons/loupe.png";
import SpacesIcon from "../assets/icons/voice-search.png";
import NotificationsIcon from "../assets/icons/bell.png";
import MessagesIcon from "../assets/icons/email.png";

const Tab = createBottomTabNavigator<ListaParametrosRotasTab>();

export type ListaParametrosRotasTab ={
    Homes: undefined;
    Search: undefined;
    Spaces: undefined;
    Notifications: undefined;
    Messages: undefined;


}


export const Routes = () => {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {backgroundColor: "white", paddingBottom: 2},
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'grey',
                }}
            >
                <Tab.Screen
                    name="Homes"
                    component={Home}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={HomeIcon}
                            />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={SearchIcon}
                            />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Spaces"
                    component={Spaces}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={SpacesIcon}
                            />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={NotificationsIcon}
                            />
                        }
                    }}
                    />
                <Tab.Screen
                    name="Messages"
                    component={Message}
                    options={{
                        tabBarIcon: ({color}) => {
                            return <Image
                                resizeMode='contain'
                                style={{width:30, tintColor: color}}
                                source={MessagesIcon}
                            />
                        }
                    }}
                    />
                
            </Tab.Navigator>
        </>
    );
}




