import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screen/Home";
import Library from "../screen/Library";
import Plus from "../screen/Plus";
import Community from "../screen/Community";
import Setting from "../screen/Setting";
import DetailCard from "../screen/DetailCard";
import LearnDetail from "../screen/LearnDetail";
import CreateNewCard from "../screen/CreateNewCard";
import PracticeFront from "../screen/PracticeFront";
import PracticeBack from "../screen/PracticeBack";
import DetailCardLibrary from "../screen/DetailCardLibrary";
import LearnDetailLibrary from "../screen/LearnDetailLibrary";
import ListLibrary from "../screen/ListLibrary";

const HomeStack = createNativeStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home Stack" component={Home} />
      <HomeStack.Screen name="DetailCard" component={DetailCard} />
    </HomeStack.Navigator>
  );
}

const LibraryStack = createNativeStackNavigator();
function LibraryStacks() {
  return (
    <LibraryStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryStack.Screen name="Library Stack" component={Library} />
      <LibraryStack.Screen
        name="DetailCardLibrary"
        component={DetailCardLibrary}
      />
      <LibraryStack.Screen
        name="LearnDetailLibrary"
        component={LearnDetailLibrary}
      />
    </LibraryStack.Navigator>
  );
}

const PlusStack = createNativeStackNavigator();
function PlusStacks() {
  return (
    <PlusStack.Navigator screenOptions={{ headerShown: false }}>
      <PlusStack.Screen name="Plus Stack" component={Plus} />
    </PlusStack.Navigator>
  );
}

const CommunityStack = createNativeStackNavigator();
function CommunityStacks() {
  return (
    <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
      <CommunityStack.Screen name="Community Stack" component={Community} />
    </CommunityStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator();
function SettingStacks() {
  return (
    <SettingStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingStack.Screen name="Setting Stack" component={Setting} />
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "9%",
          shadowColor: "#FFF9EC",
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          borderRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/home.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/statistical.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={PlusStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: -30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: focused ? "black" : "black",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../storages/nav/add.png")}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "#FCFCFC" : "#FCFCFC",
                  }}
                ></Image>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/shape.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../storages/nav/salary.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? "black" : "#C6C6C6",
                }}
              ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stacks = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ headerShown: false }}>
        <Stacks.Screen name="Tabs" component={Tabs} />
        <Stacks.Screen name="LearnDetail" component={LearnDetail} />
        <Stacks.Screen name="CreateNewCard" component={CreateNewCard} />
        <Stacks.Screen name="PracticeFront" component={PracticeFront} />
        <Stacks.Screen name="PracticeBack" component={PracticeBack} />
        <Stacks.Screen name="ListLibrary" component={ListLibrary} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
