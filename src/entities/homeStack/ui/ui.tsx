import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/screens/home";
import PostDetails from "@/features/posts/ui/PostDetails/ui";

const Stack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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

export default HomeScreenStack;
