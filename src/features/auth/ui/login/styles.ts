import { StyleSheet } from "react-native";
import colors from "@/shared/constans/colors";

export const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: colors.BLACK,
        borderRadius: 15
    },
    title: {
        fontSize: 27,
        color: colors.WHITE,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 13,
        color: colors.WHITE,
        textAlign: 'center',
        marginTop: 20
    },
    subContainer: {
        width: '100%',
        backgroundColor: colors.GREEN,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    buttonTitle: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.GREEN
    },
    button: {
        padding: 15,
        borderRadius: 99,
        marginTop: 40,
        backgroundColor: colors.WHITE
    }
});