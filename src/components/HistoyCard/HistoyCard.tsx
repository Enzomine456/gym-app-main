import { Text, View } from 'react-native'

interface HistoryCardProps {
    muscle: string
    exercise: string
    time: string
}

export function HistoryCard({ muscle, exercise, time }: HistoryCardProps) {
    return (
        <View className="w-full h-24 px-4 rounded-xl bg-white border border-yellow-300 flex-row items-center justify-between gap-4">
            <View className="flex-1 flex-row items-center gap-4">
                <View className="flex-1">
                    <Text className="text-yellow-700 font-heading font-bold text-xl capitalize" numberOfLines={1}>
                        {muscle}
                    </Text>

                    <Text className="text-gray-800 font-body text-lg" numberOfLines={1}>
                        {exercise}
                    </Text>
                </View>
            </View>

            <View className="">
                <Text className="text-yellow-500 font-body" numberOfLines={1}>
                    {time}
                </Text>
            </View>
        </View>
    )
}
