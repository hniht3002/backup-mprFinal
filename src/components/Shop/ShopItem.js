import { Image, Pressable, StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"

const ShopItem = ({ name, category, price, benefit }) => {
    return (
        <View style={styles.shopItem}>
            <View style={{flexDirection: "row", gap: 20}}>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Image source={require('../../assets/images/computer.png')} />
                </View>

                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "space-between"}}>
                        <View>
                            <CustomText>
                                {name}
                            </CustomText>
                            <View style={{flexDirection: "row", gap: 10}}>
                                <CustomText color="#059862">
                                    + 10 Health
                                </CustomText>
                                <CustomText color="#FF5151">
                                    -10$
                                </CustomText>
                            </View>
                        </View>
                        <Pressable style={styles.button}>
                            <CustomText color="white" fontSize={14}>
                                Buy
                            </CustomText>
                        </Pressable>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shopItem: {
        padding: 20,
        backgroundColor: '#DFF2FF',
        marginTop: 20,
        borderRadius: 20,
        width: '90%',
        marginLeft: '5%'
    },
    button: {
        color: 'white',
        width:'25%',
        height:30,
        backgroundColor: '#059862',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 15
    }
})

export default ShopItem