import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems';
import firebase from '../firebase';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
              title: "Bologna",
              description: "With butter lettuce, tomato and sauce bechamel",
              price: "$13.50",
              image:
                "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
            },
          ],
    })
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
  
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  
    const totalUSD = total.toLocaleString('en-US', { 
        style: 'currency', currency: 'USD' 
    })

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection('orders')
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            })
        })

      return () => unsubscribe()
    }, [])
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{
            margin: 15,
            alignItems: 'center',
            height: '100%',
        }}>
            <LottieView
                style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Your order at {restaurantName} has been placed to {totalUSD} </Text>
            <ScrollView>
                <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={10} />
            </ScrollView>
            <LottieView 
                style={{ height: 200, alignSelf: 'center'}} 
                source={require('../assets/animations/cooking.json')}
                autoPlay
                speed={0.5}
            />
        </View>
    </SafeAreaView>
  )
}