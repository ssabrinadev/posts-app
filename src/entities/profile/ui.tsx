import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { TUserType, TNavigationProp, IconName, profileStyles } from "./index";
import { profileMenu } from "@/shared/constans";
import colors from "@/shared/constans/colors";

const ProfileUI: React.FC = () => {
  const { user } = useUser() as { user: TUserType };
  const { signOut } = useAuth();
  const navigation = useNavigation<TNavigationProp>();

  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleMenuPress = (name: string) => {
    if (name === "Log Out") {
      handleLogout();
    } else if (name === "Home") {
      navigation.navigate("HomeScreen");
    } else if (name === "My Booking") {
      navigation.navigate("BookingScreen");
    }
  };

  return (
    <View>
      <View style={profileStyles.container}>
        <Text style={profileStyles.headerText}>Profile</Text>
        <View style={profileStyles.profileInfoContainer}>
          <Image source={{ uri: user.imageUrl }} style={profileStyles.profileImage} />
          <Text style={profileStyles.profileName}>{user.fullName}</Text>
          <Text style={profileStyles.profileEmail}>
            {user?.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={profileStyles.top}>
        <Text style={profileStyles.footerText}>
          Developed{" "}
          <Text style={profileStyles.footerAuthor}>by Sabrina Babajanova</Text>
        </Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={profileMenu}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleMenuPress(item.name)}
                style={profileStyles.menuItemContainer}
              >
                <Ionicons
                  name={item.icn as IconName}
                  size={35}
                  color={colors.GREEN}
                />
                <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileUI;
