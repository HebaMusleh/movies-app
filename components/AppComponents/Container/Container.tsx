import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Container = ({ children }: { children: React.ReactNode }) => {
  const statusBarHeight = getStatusBarHeight();
  return (
    <SafeAreaView style={[styles.container, { paddingTop: statusBarHeight }]}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242A32",
    flex: 1,
    padding: 24,
  },
});

export default Container;
