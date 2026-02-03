import { Text, View } from 'react-native'

import LogoSvg from '@/assets/svgs/logo.svg'

export function Brand() {
    return (
        <View className="items-center">
            <LogoSvg />
            <Text className="text-base text-yellow-500 font-bold"> Adalto Personal Sports </Text>
        </View>
    )
}
