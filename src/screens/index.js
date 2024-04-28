import GameScreen from "./GameScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import TestScreen from "./TestScreen";
import RelationScreen from "./RelationScreen";
import CourseScreen from "./CourseScreen";
import JobScreen from "./JobScreen";
import ShopScreen from "./ShopScreen";
const screens = [
    { name: 'LoginScreen', component: LoginScreen },
    {name : 'GameScreen' , component: GameScreen },
    {name : 'TestScreen' , component : TestScreen},
    {name:'ShopScreen' , component: ShopScreen},
    {name: 'JobScreen', component: JobScreen},
    {name: 'CourseScreen' ,component: CourseScreen},
    {name: 'RelationScreen', component: RelationScreen},
    { name: 'RegisterScreen', component: RegisterScreen },
]
export default screens