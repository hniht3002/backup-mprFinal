import { ScrollView, StyleSheet, View } from "react-native"
import ChooseLayout from "../layout/ChooseLayout"
import job from '../data/job.json'
import JobItem from "../components/Job/JobItem";
import CustomText from "../components/CustomText/CustomText";

const JobScreen = () => {
    return (
        <ChooseLayout>
            <View style={styles.buttonWrapper}>
                <View style={styles.button}>
                    <CustomText color="white">
                        Job
                    </CustomText>
                </View>
            </View>
            <View style={styles.scrollView}>
                <ScrollView>
                    <View>
                        {job.map(item => {
                            return (
                                <JobItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    require={item.require}
                                    salary={item.salary}
                                    level={item.level}
                                    promotion={item.promotion}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </ChooseLayout>
    )
}
const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10
    },
    scrollView: {
        flex: 1
    }, buttonWrapper: {
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
export default JobScreen