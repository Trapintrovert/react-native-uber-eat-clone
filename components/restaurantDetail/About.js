import { View, Text, Image } from 'react-native'
import React from 'react'

const image = 'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg';

const title = 'Farmhouse Kitchen Thai Cuisine'
const description = 'Thai * Comfort Food $$ * 🎫  4 ⭐ (2913+)'

export default function About() {
  return (
    <View>
      <RestaurantImage image={image}/>
      <RestaurantTitle title={title}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image 
    source={{uri: props.image}}
    style={{ width: "100%", height: 180 }}
  />
)

const RestaurantTitle = (props) => (
  <Text 
    style={{ 
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal: 15
  }}
  >
    {props.title}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text 
    style={{
      marginTop: 10,
      marginHorizontal: 15,

    }}
  >
  {props.description}
  </Text>
)