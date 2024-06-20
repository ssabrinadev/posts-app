import { View, Text, Image, TextInput } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from ".";
import { useAppDispatch, useAppSelector } from "@/shared";
import { setPostFilters } from "@/entities";
import colors from "@/shared/constans/colors";

const Header = () => {
    const { user } = useUser();
    const dispatch = useAppDispatch();
    const search = useAppSelector((state) => state.post.filters?.title_like ?? '');

    const handleSearch = (value: string) => {
        dispatch(setPostFilters({ title_like: value }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
                    <View style={styles.textContainer}>
                        <Text style={{ color: colors.WHITE, fontFamily: "outfit" }}>
                            Welcome,
                        </Text>
                        <Text
                            style={{
                                color: colors.WHITE,
                                fontSize: 20,
                                fontFamily: "outfit-medium",
                            }}
                        >
                            {user?.fullName}
                        </Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            <View style={styles.searchBarContainer}>
                <TextInput placeholder="Search" value={search} onChangeText={handleSearch} style={styles.TextInput} />
                <FontAwesome
                    name="search"
                    size={24}
                    style={styles.searchBtn}
                    color={colors.GREEN}
                />
            </View>
        </View>
    );
};

export default Header;
