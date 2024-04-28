import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'
import { getPlayerRedux } from '../../redux/data';
import PopupModal from '../Popup/PopupModal';
import NotiPopupModal from '../Popup/NotiPopupModal';

const Footer = () => {
    const navigate = useNavigation();
    const route = useRoute()
    const [nav,setNav] = useState(false)
    const [currentScreen, setCurrentScreen] = useState()
    const player = getPlayerRedux()
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const navigateToScreen = (screenName, condition = true, description) => {
        if(condition)  {
            navigate.navigate(screenName);
            setNav(!nav)
        } else {
            alert(description)
        }
    };
    useEffect(()=>{
         setCurrentScreen(route.name)
    },[nav])

    return (
        <View style={styles.footer}>
            <Pressable
                style={[styles.navItem, currentScreen === 'MoneyScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => navigateToScreen('MoneyScreen', player.age >= 18, "At least 18 years old to unlock this feature")}
            >
                <Image style={styles.image} source={require('../../assets/images/icon/money.png')} />
            </Pressable>
            <Pressable
                style={[styles.navItem, currentScreen === 'RelationScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => navigateToScreen('RelationScreen')}
            >
                <Image style={styles.image} source={require('../../assets/images/relation.png')} />
            </Pressable>
            <Pressable
                style={[styles.navItem, currentScreen === 'ShopScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => navigateToScreen('ShopScreen', player.age >= 18, "At least 18 years old to unlock this feature")}
            >
                <Image style={styles.image} source={require('../../assets/images/shop.png')} />
            </Pressable>
            <Pressable
                style={[styles.navItem, currentScreen === 'GameScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => navigateToScreen('GameScreen')}
            >
                <Image style={styles.image} source={require('../../assets/images/home.png')} />
            </Pressable>
            <Pressable
                style={[styles.navItem, currentScreen === 'CourseScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => navigateToScreen('CourseScreen', player.age >= 18, "At least 18 years old to unlock this feature")}
            >
                <Image style={styles.image} source={require('../../assets/images/suitcase.png')} />
            </Pressable>
            <Pressable
                style={[styles.navItem, currentScreen === 'JobScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => navigateToScreen('JobScreen', player.age >= 18, "At least 18 years old to unlock this feature")}
            >
                <Image style={styles.image} source={require('../../assets/images/job.png')} />
            </Pressable>
            <Pressable
                style={[styles.navItem, currentScreen === 'ExtraScreen' && { backgroundColor: '#dff2ff' }]}
                onPress={() => setShowLogoutModal(true)}
            >
                <AntDesign name="logout" size={24} color="#00E38F" />
            </Pressable>

            {
                showLogoutModal && <PopupModal
                visible={true}
                question = {"Do you want to save and logout?"}
                options = {[
                    {"title": "Save",
                    "action": "SAVE_PLAYER_AND_LOGOUT",
                    "payload": null
                    },
                    {"title": "Don't save",
                    "action": "LOGOUT",
                    "payload": null
                    }
                ]}
                onChooseOption = {() => {
                    setShowLogoutModal(false)
                }}
                hideFunction = {() => {
                    setShowLogoutModal(false)
                }}
            />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#1e1e1e',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    navItem: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323232',
    },
    image: {
        width: 25,
        height: 25,
    },
});

export default Footer;
