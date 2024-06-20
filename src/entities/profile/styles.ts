import { StyleSheet } from "react-native";
import colors from "@/shared/constans/colors";

export const profileStyles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: colors.GREEN,
    },
    header: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: colors.GREEN,
    },
    headerText: {
        fontSize: 30,
        fontFamily: "outfit-bold",
        color: colors.WHITE,
    },
    profileInfoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 99
    },
    profileName: {
        fontSize: 26,
        marginTop: 8,
        fontFamily: "outfit-medium",
        color: colors.WHITE,
    },
    profileEmail: {
        fontSize: 18,
        marginTop: 8,
        fontFamily: "outfit-medium",
        color: colors.WHITE,
    },
    top: {
        marginTop: 100
    },
    footerText: {
        textAlign: 'center',
        fontFamily: 'outfit',
        paddingHorizontal: 50,
    },
    footerAuthor: {
        color: colors.GREEN,
    },
    menuItemContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 40,
        paddingHorizontal: 115,
    },
    menuItemIcon: {
        marginRight: 10,
    },
    menuItemText: {
        fontFamily: 'outfit',
        fontSize: 20,
    },
});