import { StyleSheet } from "react-native";
import colors from "@/shared/constans/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: colors.GREEN,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    profileMainContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    textContainer: {
        display: 'flex',
        marginLeft: 10,
    },
    TextInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: colors.WHITE,
        borderRadius: 8,
        width: "85%",
        fontSize: 16,
        fontFamily: "outfit",
    },
    searchBarContainer: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
    },
    searchBtn: {
        backgroundColor: colors.WHITE,
        padding: 10,
        borderRadius: 8,
    },
});