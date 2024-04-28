import { Image, StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"
import { getPlayerRedux } from "../../redux/data"
import Avatar from "../Avatar/Avatar"

const HeaderApp = ()=> {
    const player = getPlayerRedux()
    return (
        <View style={styles.header}>
            <View style={{flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center"}}>
                <Avatar age={player.age} sex={player.sex} style={{width: 50, height: 50}}/>
                <CustomText fontSize={14} color="white" fontWeight="bold"> 
                    {player.name}
                </CustomText>
            </View>
            <CustomText fontSize={14} color="white" fontWeight="bold">
                Age: {player.age}
            </CustomText>
            <View style={styles.money}>
                <CustomText fontSize={14} color="white" fontWeight="bold">
                    ${player.amount}
                </CustomText>
                <Image source={require('../../assets/images/icon/money.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#252525',
        paddingVertical:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    icon: {
        width:50,
        height:60
    },
    money: {
        flexDirection:'row',
        alignItems:'center',
        gap:15
    }
})
export default HeaderApp