import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText/CustomText";
import RewardButton from "./RewardButton";

/**
 * @param {*} visible - Change this to true when this Component needs to show up
 * @param {*} currentDay - The number of days user has logged in
 * @returns DailyRewardWindow
 */
export default function DailyRewardWindow({ visible, currentDay }) {
  // an array of bool value to indicate whether the reward on a day has been received yet
  const [isReceivedArray, setIsReceivedArray] = useState(
    new Array(7).fill(false)
  );

  // state to show/hide the daily reward window
  const [isVisible, setIsVisible] = useState(visible);

  // fake data to test
  // note: reward should be something like:
  // reward: [
  //   {
  //     type: , // what should be increased
  //     value: , // how much should it be increased
  //     img: , // the icon, eg: money.png, ...
  //   }
  // ]
  const days = [
    { day: "Day 1", completed: false, reward: 10 },
    { day: "Day 2", completed: false, reward: 10 },
    { day: "Day 3", completed: false, reward: 10 },
    { day: "Day 4", completed: false, reward: 10 },
    { day: "Day 5", completed: false, reward: 10 },
    { day: "Day 6", completed: false, reward: 10 },
    { day: "Day 7", completed: false, reward: [10, 10, 10] },
  ];

  const claimReward = (index) => {
    // update the isReceivedArray to update the state of the reward
    if (days[index].day !== currentDay) {
      Alert.alert("Oops!", "This reward can't be received yet...");
    }
    if (days[index].day === currentDay) {
      setIsReceivedArray((prevArray) => {
        const newArray = [...prevArray];
        newArray[index] = !newArray[index];
        return newArray;
      });
    }

    // logic to update character status
  };

  // close the modal
  const closeDailyReward = () => {
    console.log("closing window...");
    setIsVisible(!isVisible);
  };
  return (
    <Modal transparent visible={isVisible} style={styles.container}>
      <View style={styles.modalBackground}>
        <View style={styles.modalHeader}>
          <View style={styles.dashedHeaderBorder}>
            <CustomText fontSize={25} fontWeight="bold" color="white">
              Daily Reward
            </CustomText>
          </View>
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.rewardBtnsContainer}>
            {days.map((day, index) => {
              return (
                <RewardButton
                  key={index}
                  day={day.day}
                  rewards={day.reward}
                  isReceived={isReceivedArray[index]}
                  onPress={() => claimReward(index)}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.claimButtonContainer}>
          <TouchableOpacity
            style={styles.claimButton}
            onPress={closeDailyReward}
          >
            <CustomText color="#059862" fontSize={20} fontWeight="bold">
              Later
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modalContainer: {
    // position: "relative",
    width: "80%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#059862",
    borderWidth: 10,
    borderRadius: 35,
    backgroundColor: "white",
  },
  rewardBtnsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "5%",
    paddingBottom: "8%",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "24%",
    zIndex: 1,
    backgroundColor: "#00E38F",
    width: "60%",
    height: "9%",
    borderRadius: 12,
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 5,
  },
  dashedHeaderBorder: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 13,
    width: "90%",
    height: "85%",
  },
  claimButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "26%",
    backgroundColor: "#8EFF58",
    borderRadius: 7,
    width: "30%",
    height: "5%",
    borderColor: "black",
    borderWidth: 1,
  },
  claimButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  rewardsContainer: {
    marginTop: 5,
  },
  rewardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
});
