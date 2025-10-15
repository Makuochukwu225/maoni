import {ScrollView, StyleSheet, View} from 'react-native';
import Header from "@/components/Header";
import LocalBest from "@/components/home/LocalBest";
import TopCategories from "@/components/home/TopCategories";
import SpotLightReview from "@/components/home/SpotLightReview";
import SearchComponent from "@/components/home/SearchComponent";
import EmptySpace from "@/components/EmptySpace";

export default function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <Header/>
            <ScrollView style={styles.container}>
                <EmptySpace/>
                <SearchComponent/>
                <LocalBest/>
                <TopCategories/>
                <SpotLightReview/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        height: '100%',
    },

});
