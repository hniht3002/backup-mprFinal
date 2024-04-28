import { useNavigation } from "@react-navigation/native";
import Player from "../../data/models/Player";
import {useDispatch} from 'react-redux'

const initialState = {
    player: new Player(),
    time: 0
};

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case "SET_PLAYER":
            return {...state, player: {...state.player, ...action.payload}}
        case "INCREASE_TIME":
            return { ...state, time: state.time + 1 }
        case "SET_TIME":
            return { ...state, time: action.payload };
        case "INCREASE_AGE":
            return {
                ...state,
                player: {
                    ...state.player,
                    age: state.player.age + 1
                }
            };
        case "COUNTINUE_CHILDHOOD":
            return state
        
        case "SKIP_CHILDHOOD":
            return { ...state, time: 6*12*20, player: {
                ...state.player, age: 6
            }}

        case "JOIN_ELE_SCHOOL":
            return {...state, player: {...state.player, elementarySchool: true}}
        
        case "JOIN_SEC_SCHOOL":
            return {...state, player: {...state.player, secondarySchool: true}}
        case "CHOOSE_UNIVERSITY":
            return {...state, player: {...state.player, university: true}}
        case "MODIFY_STATISTIC":
            const defaultStatistic = {
                happiness: +action.payload.happiness || 0,
                health: +action.payload.health || 0,
                smart: +action.payload.smart || 0,
                look: +action.payload.look || 0,
                skills: +action.payload.skills || 0,
                amount: +action.payload.amount || 0,
            }
            return {...state, player: {...state.player, 
                happiness: state.player.happiness + defaultStatistic.happiness,
                health:state.player.health + defaultStatistic.health,
                smart:state.player.smart + defaultStatistic.smart,
                look:state.player.look + defaultStatistic.look,
                skills:state.player.skills + defaultStatistic.skills,
                amount:state.player.amount + defaultStatistic.amount,
                
            }}
        
        case "PASS_AWAY":
            return {...state, player: {...state.player, alive: false}}
        
        case "ADD_COURSE":
            return {...state, player: {...state.player, course:[...state.player.course,action.payload]}}
        case "ADD_JOB":
            return {...state, player: {...state.player, job:[...state.player.course, action.payload]}}

        default:
        return state;
    }
};

export default playerReducer;