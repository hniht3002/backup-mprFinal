import { ScrollView, StyleSheet, Text, View } from "react-native"
import npcs from "../data/npc.json"
import RelationItem from "../components/Relation/RelationItem";
import CustomText from "../components/CustomText/CustomText";
import ChooseLayout from "../layout/ChooseLayout";
const RelationScreen = () => {
    return (
        <ChooseLayout>
            <View style={{flex: 1}}>
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <CustomText color="white">
                            Relation around
                        </CustomText>
                    </View>
                </View>
                <View style={styles.scrollView}>
                    <ScrollView>
                        {npcs.npcs.map(item => {
                            return (
                                    <RelationItem
                                        key={item.id}
                                        name={item.name}
                                        age={item.age}
                                        hobby={item.hobby}
                                        description={item.description}
                                        behaivor={item.behaivor}
                                        sex={item.sex}
                                        relation={item.relation}
                                    />
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </ChooseLayout>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop:10,
        marginLeft:10,
        paddingBottom:10
    },
    relationScreen: {
        flex: 1
    },
    scrollView:{
        flex:1,
    },
    buttonWrapper: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    button: {
        color: 'white',
        width: '35%',
        height: 40,
        backgroundColor: '#059862',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})
export default RelationScreen