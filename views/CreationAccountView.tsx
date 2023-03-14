import React, {useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {ActionTypes, ICreationAccountData, IInputItem, IUser, Routes} from "../types/types";
import {useDispatch} from "react-redux";

const CreationAccountView = ({navigation}:any) => {
    let fadeAnim = useRef(new Animated.Value(1)).current
    let arrayOfInputs:IInputItem[] = [
        {
            placeholder:'Name',
            iconName:'user',
            transformValue: useRef(new Animated.ValueXY({x:0, y:0})).current,
            boxShadowAnim:useRef(new Animated.Value(0)).current,
            state:useState<string>(''),
            type:'default',
            shakeAnim:useRef(new Animated.Value(0)).current,

        },
        {
            placeholder: 'Email',
            iconName: 'envelope',
            transformValue: useRef(new Animated.ValueXY({
            x:0,
            y:0
        })).current,
            boxShadowAnim:useRef(new Animated.Value(0)).current,
            type:'email-address',

            state:useState<string>(''),
            shakeAnim:useRef(new Animated.Value(0)).current,

        },
        {
            placeholder: 'Phone',
            iconName: 'mobile',
            transformValue: useRef(new Animated.ValueXY({
            x:0,
            y:0
        })).current,
            boxShadowAnim:useRef(new Animated.Value(0)).current,
            type:'numeric',

            state:useState<string>(''),
            shakeAnim:useRef(new Animated.Value(0)).current,

        },
        {
            placeholder: 'Password',
            iconName: 'lock',
            transformValue: useRef(new Animated.ValueXY({
            x:0,
            y:0
        })).current,
            boxShadowAnim:useRef(new Animated.Value(0)).current,
            type:'default',
            security:useState<boolean>(),
            state:useState<string>(''),
            shakeAnim:useRef(new Animated.Value(0)).current,

        },{
            placeholder: 'Confirm password',
            iconName: 'lock',
            transformValue: useRef(new Animated.ValueXY({
                x:0,
                y:0
        })).current,
            shakeAnim:useRef(new Animated.Value(0)).current,
            boxShadowAnim:useRef(new Animated.Value(0)).current,
            type:'default',
            security:useState<boolean>(),
            state:useState<string>('')
        }
    ]
    let[index,setIndex] = useState<number>(0)
    let dispatch = useDispatch()
    return (
        <View style={{backgroundColor:'#fff',flex:1,alignItems:'center'}}>
            <View style={styles.form}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate(Routes.LOGIN)
                }}><Icon color={'#5C6BC0'} size={30} name={'arrow-left'}/></TouchableOpacity>
            </View>
            <View style={{display:'flex',width:'90%',height:'60%',alignItems:'center'}}>
                <View style={{width:'100%',alignItems:'center'}}>
                    <Text style={{fontSize:28,fontFamily:'Avenir',fontWeight:'bold'}}>Create Account</Text>
                    <Text style={{fontSize:15,fontFamily:'Avenir',fontWeight:500}}>Create a new account</Text>
                </View>
                <View style={{alignItems:'center',gap:25,width:'90%',flexGrow:1,marginTop:40}}>
                    {arrayOfInputs.map((input,i)=>{
                        return (
                            <Animated.View style={
                                {
                                    borderRadius:5,
                                    borderWidth:2,
                                    borderColor: index === i+1 || input.state[0].length>0 ? '#5C6BC0' : '#777',
                                    transform:[
                                        {
                                            translateX:input.shakeAnim
                                        }
                                    ]

                                }}>
                                <Pressable style={{backgroundColor:'#fff',flexDirection:'row',width:'100%',height:55,borderRadius:7}}>
                                    {/*@ts-ignore*/}
                                    <TextInput secureTextEntry={input.placeholder.toLowerCase().includes('password') && input.security[0] ? true :false} keyboardType={input.type} value={input.state[0]} onChangeText={text=>{
                                        // @ts-ignore
                                        input.state[1](text)
                                    } } onBlur={e=>{
                                        // @ts-ignore
                                        if(input.state[0].length==0) {
                                            Animated.timing(input.transformValue, {
                                                toValue: {
                                                    x: 0,
                                                    y: 0
                                                },
                                                duration: 150,
                                                useNativeDriver: true

                                            }).start()

                                        }
                                        setIndex(0)
                                    } } onFocus={e=>{
                                        setIndex(i+1)
                                        console.log(e);
                                        Animated.timing(input.transformValue,{
                                            toValue:{
                                                x:-5,
                                                y:-30
                                            },
                                            duration:150,
                                            useNativeDriver:true
                                        }).start()
                                    }} style={{paddingLeft:15,paddingRight:45,width:'100%',height:'100%'}}/>
                                    {/*@ts-ignore*/}
                                    <Icon size={20} style={index == i+1 || input.state[0].length > 0 ? styles.icon : {...styles.icon,color: '#999'}} name={input.iconName}/>
                                    {/*{input.placeholder.toLowerCase().includes('password') && <Pressable style={{position:'absolute',right:15,alignSelf:'center'}} onPress={e=>{input.security[1](!input.security[0])}}><Icon color={'#999'} size={20}  name={input.security[0] ? 'eye':'eye-slash'}/></Pressable>}*/}
                                    <Animated.View pointerEvents={'none'} style={
                                        [styles.placeholder,{
                                            transform:[
                                                {
                                                    translateY:input.transformValue.y
                                                },
                                                {
                                                    translateX:input.transformValue.x
                                                }
                                            ]
                                        //     @ts-ignore
                                        }]}><Text style={index == i+1 || input.state[0].length>0 ? styles.placeholderText:{...styles.placeholderText,color:'#999'}}>{input.placeholder}</Text></Animated.View>
                                </Pressable>
                            </Animated.View>
                        )
                    })}
                </View>
                <Animated.View style={{
                    marginTop:20,
                    width:'90%',
                    height:60,
                    borderRadius:7,
                    opacity:fadeAnim
                }}>
                    <Pressable onPress={()=>{
                        // @ts-ignore
                        if(arrayOfInputs.every(input=>input.state[0].length>0)){
                            dispatch({
                                type:ActionTypes.REGISTRATION,
                                data:{
                                    // @ts-ignore
                                    email:arrayOfInputs.find(el=>el.placeholder.toLowerCase().includes('email'))?.state[0],
                                    // @ts-ignore
                                    username:arrayOfInputs.find(el=>el.placeholder.toLowerCase().includes('username'))?.state[0],
                                    // @ts-ignore
                                    phone:arrayOfInputs.find(el=>el.placeholder.toLowerCase().includes('phone'))?.state[0],
                                    // @ts-ignore
                                    password:arrayOfInputs.find(el=>el.placeholder.toLowerCase().includes('password'))?.state[0],
                                    token:'hriinfdlkj',
                                    // @ts-ignore
                                    fullName:arrayOfInputs.find(el=>el.placeholder.toLowerCase().includes('name'))?.state[0],
                                } as IUser
                            })
                            return navigation.navigate(Routes.LOGIN)
                        }
                        arrayOfInputs.forEach(input=>{
                            console.log('dslkfjdlskj')
                            // @ts-ignore
                            if(input.state[0].length==0){
                                console.log('hrinok')
                                Animated.sequence([
                                Animated.timing(input.shakeAnim,{
                                    toValue:-10,
                                    duration:62.5,
                                    useNativeDriver:true
                                }),
                                    Animated.timing(input.shakeAnim,{
                                        toValue:10,
                                        duration:62.5,
                                        useNativeDriver:true
                                    }),
                                    Animated.timing(input.shakeAnim,{
                                        toValue:-10,
                                        duration:62.5,
                                        useNativeDriver:true
                                    }),
                                    Animated.timing(input.shakeAnim,{
                                        toValue:0,
                                        duration:62.5,
                                        useNativeDriver:true
                                    })
                                    ]).start()
                            }
                        })
                    }} onPressOut={e=>Animated.timing(fadeAnim,{toValue:1,duration:250,useNativeDriver:true}).start()} onPressIn={e=>Animated.timing(fadeAnim,{toValue:0.3,duration:250,useNativeDriver:true}).start()} style={{
                        width:'100%',
                        height:'100%',
                        backgroundColor:'#5C6BC0',
                        borderRadius:7,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontSize:17,textTransform:'uppercase',color:'#fff',fontFamily:'Avenir',fontWeight:'bold'}}>Create account</Text>
                    </Pressable>
                </Animated.View>
                <View style={{marginTop:20,flexDirection:'row',width:'90%',height:70,alignItems:'center',justifyContent:'center',gap:10}}>
                    <Text style={{fontSize:15,fontWeight:400}}>Already have an account?</Text>
                    <Pressable onPress={()=>{
                        navigation.navigate(Routes.LOGIN)
                    }}>
                        <Text style={{fontSize:15,fontFamily:'Avenir',fontWeight:'bold',color:'#5C6BC0'}}>Log in</Text>
                </Pressable>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    icon:{
        right:15,
        position:'absolute',
        alignSelf:'center',
        color:'#5C6BC0'
    },
    form:{
        width:'100%',
        height:130,
        justifyContent:'center',
        paddingLeft:30
    },
    placeholder:{
        left:15,
        position:'absolute',
        alignSelf:'center',
        backgroundColor:'#fff',
        paddingHorizontal:5
    },
    placeholderText:{
        color:'#5C6BC0',
        fontSize:15,
        fontWeight:'bold',
        fontFamily:'Avenir',
        textTransform:'uppercase'
    }

})

export default CreationAccountView;