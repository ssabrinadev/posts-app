import React from "react";
import { View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { styles } from ".";
import { tokenCache } from "@/shared";
import { CLERK_PUBLISHABLE_KEY } from "@/shared/constans/clerkConfig";
import TabNavigation from "@/entities/tabs/ui/ui";
import Login from "@/screens/login";

const CoreLayout: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("@/shared/assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("@/shared/assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("@/shared/assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={CLERK_PUBLISHABLE_KEY}
    >
      <View style={styles.container}>
        <SignedIn>
          <TabNavigation />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
};

export default CoreLayout;
