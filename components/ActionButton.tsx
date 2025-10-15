import {TouchableOpacity} from 'react-native'
import React from 'react'
import {ThemedText} from "@/components/themed-text";

export default function ActionButton({title, Icon, onPress}: { title: string, Icon: any, onPress?: () => void }) {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
        }} onPress={onPress}>
            <ThemedText style={{fontWeight: '500', fontFamily: 'Inter-Medium'}} darkColor={"#6255FA"}
                        lightColor={"#6255FA"}>{title}</ThemedText>
            {Icon && Icon}

        </TouchableOpacity>
    )
}
