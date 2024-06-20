import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "@/entities/tabs/ui/ui";
import PostDetails from "@/features/posts/ui/PostDetails/ui";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: "Post Details" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
