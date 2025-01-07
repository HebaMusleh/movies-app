import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0296E5",
        tabBarInactiveTintColor: "#67686D",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#242A32",
          borderTopWidth: 1,
          borderTopColor: "#0296E5",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="home" color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="search" color={color} />
          ),
        }}
        />

      <Tabs.Screen
        name="watchList"
        options={{
          title: "Watch List",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="bookmark" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
