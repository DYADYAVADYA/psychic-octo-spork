import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    Animated,
    Keyboard,
    Image,
    ScrollView,
    Easing
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import 'react-native-gesture-handler'
import AnimatedView from "react-native-reanimated/lib/types/lib/reanimated2/component/View";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../types/types";
import {loginActionCreator} from "../store/actions/actions";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
const LoginView = ({navigation}) => {
    let expansionAnim = useRef(new Animated.Value(0)).current
    let {loginActionCreator} = useActions()
    let[focused,setFocused] = useState<boolean>(false)
    let[invalid,setInvalid] = useState<boolean>(false)
    let [formData,setFormData] = useState({
        email:'',
        password:''
    })
    let state = useTypedSelector(state1 => state1.reducer)
    useEffect(()=>{
        console.log(state.users);
    },[state])
    let hrin = useRef(null)
    useEffect(()=>{

    },[])

    useEffect(()=>{
        // console.log(formData)
    },[formData])
    Animated.timing(expansionAnim,{
        toValue:0,
        duration:250,
        useNativeDriver:true
    })

    let [alertMessage,setAlertMessage] = useState<string>('')
    let [focused2,setFocused2] = useState<boolean>(false)
    let movePlaceholder = useRef(new Animated.ValueXY({
        x:0,
        y:0
    })).current
    let movePlaceholder2 = useRef(new Animated.ValueXY({
        x:0,
        y:0
    })).current
    let boxShdw = useRef(new Animated.Value(0)).current
    let boxShdw2 = useRef(new Animated.Value(0)).current
    let fadeAnim = useRef(new Animated.Value(1)).current
    let shakeAnimation = useRef(new Animated.Value(0)).current
    let shakeAnimation2 = useRef(new Animated.Value(0)).current
    let validationAnim = useRef(new Animated.Value(10)).current
    let [eventTargetValue,setEventTarget] = useState('')
    let inpAnim = useRef(new Animated.Value(0)).current
    let inpAnim2 = useRef(new Animated.Value(0)).current
    let patterns = {
        email:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        password:/^[\w\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]{8,20}$/,
    }

    useEffect(()=>{
        if(formData.email.length==0){
            setInvalid(false)
        }
        else if(patterns.email.test(formData.email)){
            setInvalid(false)
        }
        else{
            if(formData.email.length>5){
                setAlertMessage('Норм')
            }
            else if(formData.email.length<5 && formData.email.length!=0){
                setAlertMessage('Та пішов ти нахуй муділа там має бути більше 5 символів')
            }
            setInvalid(true)
        }


    },[formData.email])
    useEffect(()=>{
        invalid ? Animated.timing(validationAnim,{toValue:50,duration:150,useNativeDriver:true}).start() : Animated.timing(validationAnim,{toValue:1,duration:150,useNativeDriver:true}).start()
    },[invalid])

    // @ts-ignore
    return (
        <View style={{width:'100%',
        height:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
            <View style={{...styles.form}}>
                <Pressable onPress={e=>{
                    Animated.timing(movePlaceholder,{
                        toValue:{
                            x:-5,
                            y:-30
                        },
                        duration:100,
                        useNativeDriver:true
                    }).start()
                    Animated.timing(movePlaceholder2,{
                        toValue:{
                            x:-5,
                            y:-30
                        },
                        duration:150,
                        useNativeDriver:true
                    }).start()
                    setFocused(true)
                    setFocused2(true)

                    setFormData({
                        email:'andriy',
                        password: 'hrinenko'
                    })
                }} style={{
                    width:100,
                    height:100
                }}><Image style={{
                    width:'100%',
                    height:'100%',
                    opacity:0.5,
                }} source={{
                    uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
                }}/></Pressable>
                <Text ref={hrin} style={{fontFamily:'Avenir',fontSize:35,fontWeight:'bold'}}>Welcum back</Text>
                <Text style={{fontFamily:'Avenir',fontSize:18,color:'grey'}}>Sign to continue</Text>
                {/*<Animated.View style={{*/}
                {/*    backgroundColor:'hsl(360,80%,50%)',*/}
                {/*    width:'90%',*/}
                {/*    height:50,*/}
                {/*    borderRadius:5,*/}
                {/*    transform:[*/}
                {/*        {*/}
                {/*            scaleY:expansionAnim*/}
                {/*        }*/}
                {/*    ]*/}
                {/*}}>*/}
                {/*</Animated.View>*/}
                <View style={{width:'100%',alignItems:'center',gap:50}}>
                    <Animated.View style={{
                        borderWidth:2,
                        borderColor:focused ? '#5C6BC0' : '#777',
                        borderRadius:5,
                        transform:[
                            {
                                translateX:shakeAnimation2
                            }
                        ]
                    } }><Pressable style={{zIndex:1,flexDirection:'row',width:'100%',height:55,backgroundColor:'#fff',borderRadius:7}}>
                        <Animated.View style={
                            {
                                width:55,
                                height:25,
                                backgroundColor:'#fff',
                                position:'absolute',
                                zIndex:1,
                                transform:[{
                                    scaleX:inpAnim2
                                }],
                                left:10,
                                top:-15
                            }
                        }><View></View></Animated.View>
                        <Animated.View style={{
                            position:'absolute',
                            width:'100%',
                            height:'100%',
                            top:6,
                            zIndex:-1,
                            justifyContent:'center',
                            alignItems:'center',
                            transform:[
                                {
                                    translateY:validationAnim
                                }
                            ]
                        }}><View><Text  style={{textAlign:'center',fontFamily:'Avenir',fontWeight:'bold',color:'hsl(360,50%,50%)'}} selectionColor={'blue'}>{alertMessage}</Text></View></Animated.View>
                        {/*@ts-ignore*/}
                        <TextInput value={formData.email} onBlur={e=>{
                            if(formData.email.length==0) {
                                Animated.timing(movePlaceholder, {
                                    toValue: {x: 0, y: 0},
                                    duration: 250,
                                    useNativeDriver: true
                                }).start()
                                Animated.timing(inpAnim2,{toValue:0,duration:150,useNativeDriver:true}).start()
                                setFocused(false)
                            }
                        }} onChange={e=> console.log(Object.keys(e.nativeEvent.text))} onChangeText={text => {
                            setFormData((prevState)=>{
                                return {...formData,email:text}
                            })
                        }
                        } onFocus={e=>{

                            Animated.timing(movePlaceholder,{
                                toValue:{x:-5,y:-30},
                                duration:250,
                                useNativeDriver:true
                            }).start()
                            Animated.timing(inpAnim2,{toValue:1,duration:150,useNativeDriver:true}).start()
                            setFocused(true)
                            console.log('dskfjldkj')

                        } } style={{color:'#5C6BC0',borderRadius:5,paddingLeft:20,paddingRight:45,width:'100%',height:'100%',backgroundColor:'#fff'}}/>
                        <Icon style={{position:'absolute',alignSelf:'center',right:15}} name ={'envelope'} color={focused ? '#5C6BC0' : '#777'} size={20}/>
                        <Animated.View pointerEvents={"none"} style={[{zIndex:2,position:'absolute',alignSelf:'center',left:15,},{
                            transform:[{
                                translateX:movePlaceholder.x,
                            },
                                {
                                    translateY:movePlaceholder.y
                                }]
                        }]}><Text style={focused ? {paddingHorizontal:5,fontWeight:'bold',fontFamily:'Avenir',color:'#5C6BC0',fontSize:15,textTransform:'uppercase'} : {paddingHorizontal:5,fontWeight:"bold",fontFamily:'Avenir',color:'#777',fontSize:15,textTransform:'uppercase'}}>Email</Text></Animated.View>
                    </Pressable>
                    </Animated.View>
                    <Animated.View style={{
                        borderWidth:2,
                        borderColor:focused2 ? '#5C6BC0' : '#777',
                        borderRadius:5,
                        transform:[
                            {translateX:shakeAnimation}
                        ]
                    } }><Pressable style={{flexDirection:'row',width:'100%',height:55,backgroundColor:'#fff',borderRadius:7}}>
                        <Animated.View style={
                            {
                                width:95,
                                height:25,
                                backgroundColor:'#fff',
                                position:'absolute',
                                zIndex:1,
                                transform:[{
                                    scaleX:inpAnim
                                }],
                                left:10,
                                top:-15
                            }
                        }><View></View></Animated.View>
                        {/*@ts-ignore*/}
                        <TextInput value={formData.password} onBlur={e=> {
                            //
                            if (formData.password.length==0) {
                                Animated.timing(movePlaceholder2, {
                                    toValue: {x: 0, y: 0},
                                    duration: 250,
                                    useNativeDriver: true
                                }).start()
                                Animated.timing(inpAnim,{
                                    toValue:0,
                                    duration:150,
                                    useNativeDriver:true
                                }).start()
                                setFocused2(false)
                            }
                        }
                        } onChange={e=> console.log(Object.keys(e.nativeEvent.text))} onChangeText={text => {
                            setFormData({...formData,password:text})}
                        } onFocus={e=>{
                            Animated.timing(inpAnim,{
                                toValue:1,
                                duration:150,
                                useNativeDriver:true
                            }).start()
                            Animated.timing(movePlaceholder2,{
                                toValue:{
                                    x:-5,
                                    y:-30,
                                },

                                duration:250,
                                useNativeDriver:true
                            }).start()

                            setFocused2(true)
                            console.log('dskfjldkj')

                        } } style={{paddingRight:45,paddingLeft:20,width:'100%',height:'100%',color:'#5C6BC0'}}/>
                        <Icon style={{position:'absolute',alignSelf:'center',right:15}} name ={'lock'} color={focused2 ? '#5C6BC0' : '#777'} size={20}/>
                        <Animated.View pointerEvents={"none"} style={[{zIndex:2,position:'absolute',alignSelf:'center',left:15,},{
                            transform:[{
                                translateX:movePlaceholder2.x,
                            },
                                {
                                    translateY:movePlaceholder2.y
                                }]
                        }]}><Text style={focused2 ? {paddingHorizontal:5,fontWeight:'bold',fontFamily:'Avenir',color:'#5C6BC0',fontSize:15,textTransform:'uppercase'} : {paddingHorizontal:5,fontWeight:"bold",fontFamily:'Avenir',color:'#777',fontSize:15,textTransform:'uppercase'}}>Password</Text></Animated.View>
                    </Pressable>
                    </Animated.View>
                </View>
                <View style={{width:'90%',height:60,alignItems:'flex-end',
                justifyContent:'center'}}><Text style={{fontSize:16,fontFamily:'Avenir',fontWeight:'bold',color:'#5C6BC0'}}>Forgot password?</Text></View>
                <Animated.View style={{
                    width:'100%',
                    height:60,
                    opacity:fadeAnim
                }}><Pressable onPress={()=>{
                if(Object.values(formData).every(value=>value.length==0)){
                        Animated.sequence([
                            Animated.timing(shakeAnimation2, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation2, {toValue: 10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation2, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation2, {toValue: 0, duration: 62.5, useNativeDriver: true}),
                        ]).start()
                        Animated.sequence([
                            Animated.timing(shakeAnimation, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation, {toValue: 10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation, {toValue: 0, duration: 62.5, useNativeDriver: true}),
                        ]).start()
                    }

                    if(formData.password.length==0) {
                        Animated.sequence([
                            Animated.timing(shakeAnimation, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation, {toValue: 10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation, {toValue: 0, duration: 62.5, useNativeDriver: true}),
                        ]).start()
                    }
                    else if(formData.email.length==0){
                        Animated.sequence([
                            Animated.timing(shakeAnimation2, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation2, {toValue: 10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation2, {toValue: -10, duration: 62.5, useNativeDriver: true}),
                            Animated.timing(shakeAnimation2, {toValue: 0, duration: 62.5, useNativeDriver: true}),
                        ]).start()
                    }
                    else{
                        return loginActionCreator(formData.email, formData.password, navigation)
                    }

                }} onPressOut={e=>{
                    Animated.timing(fadeAnim,{
                        toValue:1,
                        //
                        duration:250,
                        useNativeDriver:false
                    }).start()
                }} onPressIn={e=>{
                    Animated.timing(fadeAnim,{
                        toValue:0.3,
                        duration:250,
                        useNativeDriver:false
                    }).start()
                }} style={{width:'100%',height:'100%',backgroundColor:'#5C6BC0',borderRadius:7,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontSize:20,fontFamily:'Avenir',textTransform:'uppercase', fontWeight:'bold'}}>Login</Text>
                </Pressable></Animated.View>
                <View style={{flexDirection:'row',gap:10,width:'100%',height:50,display:'flex',justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:15,fontFamily:'Avenir',fontWeight:'bold'}}>Don't have an account?</Text><Pressable onPress={e=>{
                    navigation.navigate(Routes.CREATIONACCOUNT)
                }}><Text style={{fontSize:15,fontWeight:'bold',color:'#5C6BC0',fontFamily:'Avenir'}}>Create a new account</Text></Pressable></View>
            </View>
        </View>
    );
};
let styles = StyleSheet.create({
    form:{
        gap:20,
        width:'80%',
        height:600,
        display:'flex',
        alignItems:"center",
    },

})

export default LoginView;