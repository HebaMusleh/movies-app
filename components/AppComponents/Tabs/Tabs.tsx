import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ITab } from "@/types/types";

const Tabs = ({ tabs }: { tabs: ITab[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const renderContent = () => {
    const activeTabContent = tabs.find(
      (tab: { key: any }) => tab.key === activeTab
    )?.content;
    return activeTabContent || null;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tab} horizontal>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.activeTab]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.key && styles.activeTabText,
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView style={styles.content}>{renderContent()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  tab: {
    flexDirection: "row",
  },
  activeTab: {
    borderBottomWidth: 4,
    borderBottomColor: "#3A3F47",
  },
  tabText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
    padding: 10,
  },
  activeTabText: {
    fontWeight: "700",

  },
  content: {},
});

export default Tabs;
