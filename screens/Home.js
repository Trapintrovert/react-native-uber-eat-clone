import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "h959N7v3q7ejMaEi-RtR5DRivaN8A1pVpjMygjK12GOnsSsweSPKSN9TWZJl76tHf6yxrYMqMCfU8FlgDjb-6KzBkipxF1tWeY7j_PfbFLhP-tQmuxA4DkDN08cUYHYx"

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState('San Francisco')
  const [activeTab, setActiveTab] = useState('Delivery')

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;


    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])
  

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
      <View style={{ backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs/>
    </SafeAreaView>
  )
}

export default Home