import { View, StyleSheet, Image } from "react-native";
import UserStatusBar from "../common/UserStatusBar"
function StatusBarWithIcon( {source, percentage}) {
    return ( 
        <View style = {[styles.row, styles.verticalCenter, {gap: 10}]}>
            <Image style={styles.imageIconSmall} source={source} />
            <View style = {{width: "88%"}}>
                <UserStatusBar percentage={percentage} />
            </View>
        </View> 
     );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    imageIcon: {
        width: 50,
        height: 50
    },
    imageIconSmall: {
        width: 20,
        height: 20
    },
    verticalCenter: {
        alignItems: "center"
    }
})
export default StatusBarWithIcon;