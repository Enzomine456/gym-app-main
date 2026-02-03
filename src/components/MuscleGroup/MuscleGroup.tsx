import clsx from 'clsx'
import { Pressable, PressableProps, Text } from 'react-native'

interface MuscleGroupProps extends PressableProps {
    name: string
    isActive: boolean
}

export function MuscleGroup({ name, isActive = false, ...rest }: MuscleGroupProps) {
    return (
        <Pressable
            className={clsx(
                'min-w-24 max-w-28 h-12 m-1 px-1 border border-yellow-300 bg-white rounded items-center justify-center overflow-hidden active:border-yellow-500',
                isActive && '!border-yellow-500',
            )}
            {...rest}
        >
            <Text className="font-bold text-yellow-700 uppercase text-sm">{name}</Text>
        </Pressable>
    )
}
