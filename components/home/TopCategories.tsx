import {StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {ThemedText} from "@/components/themed-text";
import ActionButton from "@/components/ActionButton";
import {ArrowForwardIcon} from "@/assets/svgs/ride";
import {useTheme} from "@react-navigation/core";
import {ExtendedTheme} from "@/theme/theme";

// Import SVGs as components
import FashionIcon from "./../../assets/images/fashion.svg";
import RestaurantIcon from "./../../assets/images/restuatant.svg";
import HotelsIcon from "./../../assets/images/hotels.svg";
import FastFoodIcon from "./../../assets/images/fast-food.svg";

const data = [
    {
        title: 'Fashion',
        subtitle: '2k reviews',
        icon: FashionIcon,
    },
    {
        title: 'Restaurant',
        subtitle: '6k reviews',
        icon: RestaurantIcon,
    },
    {
        title: 'Hotels',
        subtitle: '7k reviews',
        icon: HotelsIcon,
    },
    {
        title: 'Fast Food',
        subtitle: '10k reviews',
        icon: FastFoodIcon,
    },
]

export default function TopCategories() {
    const {colors} = useTheme() as ExtendedTheme;
    return (
        <View style={[styles.container, {backgroundColor: colors.white}]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <ThemedText
                    type={'title'}
                    style={{fontSize: 14}}
                    darkColor={colors.text}
                    lightColor={colors.text}>
                    Top Categories
                </ThemedText>
                <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                    <ActionButton title={"View All"} Icon={<ArrowForwardIcon color={"#6255FA"}/>}/>
                </View>
            </View>
            <View style={{width: '100%', flexDirection: 'row', gap: 8,}}>
                {
                    data.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <View key={index} style={{
                                flex: 1,
                                minHeight: 56,
                                flexDirection: 'column',

                            }}>

                                <TouchableOpacity style={{
                                    flex: 1,
                                    position: 'relative',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#F6F6F6',
                                    paddingVertical: 16,
                                    borderRadius: 12,
                                }}>
                                    <View>
                                        <IconComponent width={24} height={24}/>
                                    </View>
                                    <View style={{
                                        position: 'absolute',
                                        backgroundColor: colors.white,
                                        width: 20,
                                        height: 20,
                                        borderRadius: 8,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        bottom: 3,
                                        right: 3,
                                    }}>
                                        <ArrowForwardIcon/>
                                    </View>
                                </TouchableOpacity>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <ThemedText style={{color: colors.text, fontSize: 14}}
                                                type={'title'}>{item.title}</ThemedText>
                                    <ThemedText style={{
                                        fontSize: 12,
                                        color: colors.grey,
                                        lineHeight: 20
                                    }}>{item.subtitle}</ThemedText>
                                </View>

                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginTop: 4,
        borderRadius: 12,
    },
});
