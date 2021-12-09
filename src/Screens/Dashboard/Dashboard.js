
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// // import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image, Animated} from 'react-native'
// import navigationString from '../../constants/navigationString'
// import ConstButton from '../../asset/button'
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import styles from './styles';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useRef } from 'react';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SearchScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Search!</Text>
//       </View>
//     );
//   }


//   function NotificationScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Notification!</Text>
//       </View>
//     );
//   }


// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function Dashboard() {
//     const tabOffsetValue = useRef(new Animated.Value(0)).current;
//   return (
   
//       <Tab.Navigator  screenOptions={{
//           tabBarShowLabel:false,
//           headerShown:false,
//         //   style:{backgroundColor:'red'}
//           }} >

//         <Tab.Screen name="Home" component={HomeScreen} 
//             options={{
                
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="home-outline" color="#6902FC" size={25} />
//                 ),
//               }}/>

//         <Tab.Screen name="Search" component={SearchScreen} options={{
                
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="magnify" color="#6902FC" size={25} />
//                 ),
//               }}/>


//         <Tab.Screen name="Notification" component={NotificationScreen} options={{
                
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="bell-outline" color="#6902FC" size={25} />
//                 ),
//               }}/>


//         {/* <Tab.Screen name="Setting" component={SettingsScreen} options={{
                
//                 tabBarIcon: (focused) => (
//                     <View>
//                   <MaterialCommunityIcons name="account-settings-outline" color={focused ? 'red':'green'} size={25} />
//                   </View>
//                 ),
//               }}/> */}


// <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={{
//               // centring Tab Button...
//               position: 'absolute',
//               top: 20
//             }}>
//               <MaterialCommunityIcons 
//                 name="account-settings-outline"
//                 size={25}
//                 color={focused ? 'red' : 'gray'}
//               ></MaterialCommunityIcons >
//             </View>
//           )
//         }} listeners={({ navigation, route }) => ({
//           // Onpress Update....
//           tabPress: e => {
//             Animated.spring(tabOffsetValue, {
//               toValue: getWidth() * 4,
//               useNativeDriver: true
//             }).start();
//           }
//         })}></Tab.Screen>


//       </Tab.Navigator>

      
    
//   );
  
// } 

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image, Animated} from 'react-native'
import navigationString from '../../constants/navigationString'
import ConstButton from '../../asset/button'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRef } from 'react';

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Plus...
// import plus from './assets/plus.png'

// // Font Awesome Icons...
// import { FontAwesome5 } from '@expo/vector-icons'
// import { useRef } from 'react';

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    
      <Tab.Navigator screenOptions={{
                  tabBarShowLabel:false,
                  headerShown:false,
        // Floating Tab Bar...
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            //   top: 20
            }}>
              <MaterialCommunityIcons
                name="home-outline"
                size={25}
                color={focused ? '#6902FC' : 'gray'}
              ></MaterialCommunityIcons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            //   top: 20
            }}>
              <MaterialCommunityIcons
                name="magnify"
                size={25}
                color={focused ? '#6902FC' : 'gray'}
              ></MaterialCommunityIcons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: '#6902FC',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 30 : 30
              }}>
                {/* <Image source={require('../../asset/plus.png')} style={{
                  width: 10,
                  height: 10,
                  tintColor: 'white',
                }}></Image> */}

                <MaterialCommunityIcons
                name="plus"
                size={40}
                color='white'
                
              ></MaterialCommunityIcons>
                

              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            //   top: 20
            }}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={25}
                color={focused ? '#6902FC' : 'gray'}
              ></MaterialCommunityIcons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            //   top: 20
            }}>
              <MaterialCommunityIcons
                name="account-settings-outline"
                size={25}
                color={focused ? '#6902FC' : 'gray'}
              ></MaterialCommunityIcons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
 
         {/* <Animated.View style={{
        width: getWidth() - 20,
        height: 2,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 98,
        // Horizontal Padding = 20...
        left: 50,
        borderRadius: 20,
        transform: [
          { translateX: tabOffsetValue }
        ]
      }}>

      </Animated.View> */}
      </Tab.Navigator>

    
    
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});