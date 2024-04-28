import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "../CustomText/CustomText";

/**
 *
 * @param {*} day - the Day of reward
 * @param {*} reward - the reward
 * @param {*} isReceived - whether the reward is received or not
 * @returns
 */
export default function RewardButton({
  day,
  rewards,
  isReceived,
  onPress,
}) {
  return (
    <TouchableOpacity
      disabled={isReceived} // to disable the button once it's been clicked
      style={[
        styles.container,
        { backgroundColor: isReceived ? "rgba(0,0,0,0.5)" : "#9CFF6D" },
      ]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        {isReceived ? (
          <Image
            style={styles.isChecked}
            source={require("../../assets/images/icon/ticked.png")}
          />
        ) : null}
        <View>
          <CustomText color="#059862" fontWeight="bold" fontSize={15}>
            {day}
          </CustomText>
        </View>
        <View style={styles.rewardsContainer}>
          {Array.isArray(rewards)
            ? rewards.map((reward, index) => (
                <View key={index} style={styles.rewardRow}>
                  {/* change the path of the img to be something like reward.img */}
                  <Image
                    source={require(`../../assets/images/icon/coin.png`)}
                  />
                  <CustomText color="white" fontSize={10} fontWeight="bold">
                    +{reward.reward}
                  </CustomText>
                </View>
              ))
            : renderSingleReward(rewards)}
        </View>
      </View>
    </TouchableOpacity>
  );
}
const renderSingleReward = (reward) => (
  <View style={styles.normalReward}>
    {/* change the path of the img to be something like reward.img */}
    <Image source={require(`../../assets/images/icon/coin.png`)} />
    <CustomText color="white" fontSize={10} fontWeight="bold">
      +{reward}$
    </CustomText>
  </View>
);
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9CFF6D",
    borderRadius: 15,
    width: "25%",
    height: "25%",
    marginHorizontal: 8,
    borderColor: "#059862",
    borderWidth: 3,
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  isChecked: {
    position: "absolute",
    zIndex: 1,
  },
  rewardsContainer: {
    marginTop: 5,
  },
  rewardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  normalReward: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
