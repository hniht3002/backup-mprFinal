import {Pressable, StyleSheet, Text } from "react-native";
import MainLayout from "../layout/MainLayout";
import events from "../data/events.json"
import DailyRewardWindow from "../components/DailyReward/DailyRewardWindow"
function TestScreen() {
    let event = events.events[0]
    return (
        <DailyRewardWindow />
    );
}
export default TestScreen;