import { Image, Pressable, StyleSheet, View } from "react-native"
import CustomText from "../CustomText/CustomText"
import TextItem from "../common/TextItem"
import Avatar from "../Avatar/Avatar"

const RelationItem = ({ name, age, hobby, description, behaivor, sex, relation }) => {
    const checkSex = (sex) => {
        if (sex === 0) {
            return "Male"
        } else {
            return "Female"
        }
    }
    const genImage = (sex) => {
        return "https://cdn.sforum.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-1.jpg"
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.itemWrapper}>

                <Avatar age={age} sex={sex} style={styles.image}/>


                <View style={styles.npcInfor}>
                    <View style={styles.npcHeader}>
                        <CustomText>
                            {name}
                        </CustomText>
                        <CustomText>
                            Age: {age}
                        </CustomText>
                    </View>
                    {/* {hobby.map((index, item) => {
                return (
                    <CustomText key={index}>
                        {item}
                    </CustomText>
                )
            })} */}
                    <TextItem title={"Description"} content={description}/>
                    {/* <TextItem title={"Behaivor"} content={behaivor} /> */}
                    <TextItem title={"Sex"} content={checkSex(sex)} />
                    {/* <TextItem title={"Status"} content={checkRelation(relation)} /> */}
                
                    <Pressable style={styles.press}>
                        <CustomText style={styles.buttonText} fontSize={14}>
                            Add friend
                        </CustomText>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width:'100%',
        backgroundColor: '#DFF2FF',
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: '5%',
        padding: 10
    },
    itemWrapper: {
        width: '100%',
        flexDirection: 'row',
        gap: 10
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 90,
        borderRadius: 20,
    },
    npcProfile: {
        width: '1005'
    },
    npcInfor: {
        width: '70%',
        paddingHorizontal: 10
    },
    npcHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    press: {
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        color: 'white',
        width:'40%',
        textAlign:'center',
        marginTop: 20,
        backgroundColor: '#059862',
        paddingVertical: 10,
        borderRadius: 10
    }

})
export default RelationItem