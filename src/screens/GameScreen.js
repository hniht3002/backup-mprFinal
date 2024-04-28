import { useDispatch } from "react-redux";
import EventMileStoneBox from "../components/EventComponent/EventMilestoneBox";
import MainLayout from "../layout/MainLayout";
import { getStageRedux, getPlayerRedux, getTimeRedux, getEventRedux } from "../redux/data";
import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import UserInfoBoard from "../components/UserInfoBoard/UserInfoBoard";
import TriggerButton from "../components/TriggerButton/TriggerButton";
import CustomText from "../components/CustomText/CustomText";
import PopupModal from "../components/Popup/PopupModal";
import NotiPopupModal from "../components/Popup/NotiPopupModal";
import ChooseLayout from "../layout/ChooseLayout";
import { randomNumberInRange } from "../utils/Random";
import { db } from "../firebase/config";
import { collection, addDoc, getDocs } from "firebase/firestore";
function GameScreen() {
    const dispatch = useDispatch()
    const [player, setPlayer] = useState(getPlayerRedux())
    const [stage, setStage] = useState(getStageRedux())
    const [showEvent, setShowEvent] = useState(true)
    const [percentage, setPercentage] = useState(0)
    const [currentTimeInAge, setCurrentTimeInAge] = useState(1)
    const [events, setEvents] = useState(getEventRedux())
    const [finalEvent, setFinalEvent] = useState(false)
    const [milestone, setMileStone] = useState([])
    const timePerYear = 12*60
    const levelUp = () => {
        dispatch({type: "INCREASE_AGE"})
        setCurrentTimeInAge(1)
        setPlayer(player => player = getPlayerRedux())
        dispatch({type: "GET_EVENT", payload: {player}})
        setStage(getStageRedux())
        setEvents(events => events = getEventRedux())
        setShowEvent(true)
    }

    const showNextEvent = () => {
        if(events.length == 1) {
            setFinalEvent(true)
        } else {
            setFinalEvent(false)
        }
        if(events.length > 1) {
            setEvents(prevEvents => prevEvents.slice(1))
            setShowEvent(true)
        } else {
            setShowEvent(false)
        }
        
    }
    const filterEvent = () => {
        const milestoneAge = [6, 12,18]
        let eventList = [events[0]]
        let e = getEventRedux()

        if(finalEvent) {
            e = getEventRedux()
            if(milestoneAge.includes(player.age)) {
                eventList = [e[0]]
            }
            if(player.age === 18) {
                const ev = {
                    "message": "You received $1,500 from parents.",
                    "condition": "",
                    "status": "good",
                    "effect": {
                        "type": "MODIFY_STATISTIC",
                        "payload": {
                            "happiness": "+5",
                            "amount": "+1500"
                        }
                    }
                }
                eventList.push(ev)
            }

            while(eventList.length < 2) {
                const randomIndex = randomNumberInRange(1, e.length - 1)
                if(e[randomIndex] !== undefined) {eventList.push(e[randomIndex])}
            }


            if(player.age == 22) {
                eventList[2] = {
                    "message": "Congratulation! You have graduated from university",
                    "status": "good",
                    "effect": {
                        "type": "MODIFY_STATISTIC",
                        "payload": {
                            "happiness": "0",
                            "amount": "0"
                        }
                    }
            }
            }
        }
        setEvents(eventList)

        if(events.length != 0) {
            setShowEvent(true)
        }
    }

    useEffect(() => { 
        const intervalID = setInterval(() => {
            dispatch({type: "INCREASE_TIME"})
            const currentTime = getTimeRedux()
            const timeToIncreaseAge = (player.age + 1) * timePerYear
            setCurrentTimeInAge(currentTimeInAge => currentTimeInAge + 1)
            setPercentage(currentTimeInAge * 100 / timePerYear)
            if(currentTime === timeToIncreaseAge) {
                levelUp()
            }   
        }, 1000);

        return () => {clearInterval(intervalID)}
    }, [stage, showEvent, dispatch, events, currentTimeInAge])


    useEffect(() => {
        filterEvent()
    }, [player])
    return ( <ChooseLayout>
         <View style={styles.wrapper}>
            <View style={styles.center}>
                <UserInfoBoard />
            </View> 

            <View style = {[styles.center]}>
                <TriggerButton percentage = {percentage} onPress={() => {
                    levelUp()
                    dispatch({type: "SET_TIME", payload: (player.age + 1)  * timePerYear})
                }}/>
            </View>
            <View style = {styles.center}>
                <EventMileStoneBox milestones={ milestone}/>
            </View>
            <View>
                <CustomText align="center" color="white">Age: {player.age}</CustomText>
            </View>
        </View>

        {showEvent && events[0].options != null && <PopupModal
            visible={true}
            question = {events[0].message}
            options = {events[0].options}
            player = {player}
            hideFunction = {() => {setShowEvent(false)}}
            onChooseOption = {() => {
                setShowEvent(false); 
                setPlayer(player => player = getPlayerRedux())
                setStage(stage => stage = getStageRedux())
                showNextEvent()
            }}
        />}

        {showEvent && events[0].effect != null && <NotiPopupModal 
            visible={true}
            message = {events[0].message}
            event = {events[0]}
            onPress = {() => {
                setShowEvent(false); 
                dispatch({type: events[0].effect.type, payload: events[0].effect.payload})
                dispatch({type: "GET_EVENT", payload: {player}})
                setMileStone([...milestone, {message: events[0].message, age: player.age}])
                showNextEvent()
            }}
        />}
    </ChooseLayout> );
}

export default GameScreen;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "transparent",
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: "space-evenly"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    borderTimer: {
        backgroundColor: "#404040",
        borderRadius: 99
    },
    borderTimerOverlay: {
        backgroundColor: "#8eff58",
        padding: 10,
        borderRadius: 99
    }
})