import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const HeaderTabs = () => {
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
            <HeaderButton text="Delivery" btnColor="black" textColor="white" />
            <HeaderButton text="Pickup" btnColor="white" textColor="black" />
        </View>
        )
    }
    
export default HeaderTabs


const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.btnColor,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        
    >
        <Text style={{ color: props.textColor, fontSize:15, fontWeight: "900" }}>{props.text}</Text> 
    </TouchableOpacity>
)