import { StyleSheet } from "react-native"

const WIDTH = 1;
const HEGIHT = 1;

export const styles = StyleSheet.create({
    container: {
        width: WIDTH * 174,
        height: HEGIHT * 205,

        paddingHorizontal: WIDTH * 16,
        paddingTop: HEGIHT * 20,
        paddingBottom: HEGIHT * 16,

        borderRadius: 8,

        backgroundColor: 'red',
    },
    titleContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: HEGIHT * 16,
    },
    titleImage: {
        width: WIDTH * 16,
        height: HEGIHT * 16,
    },
    subtitle: {
        fontSize: HEGIHT * 12,
        marginTop: HEGIHT * 8,
    },
    image: {
        width: WIDTH * 142,
        height: HEGIHT * 88,
        marginTop: HEGIHT * 20,
    },
});