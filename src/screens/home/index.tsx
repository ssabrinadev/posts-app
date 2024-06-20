import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/widgets/header/ui";
import { PostsList } from "@/features";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <Header />
        <PostsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
