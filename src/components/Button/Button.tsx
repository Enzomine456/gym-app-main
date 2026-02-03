import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import clsx from 'clsx'

interface ButtonProps extends TouchableOpacityProps {
    title: string
    variant?: 'primary' | 'secondary'
}

export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={clsx(
                'w-full h-16 bg-yellow-500 border border-transparent items-center justify-center rounded-md active:cursor-pointer group active:bg-yellow-700',
                variant === 'secondary' && 'bg-transparent !border-yellow-500 active:bg-yellow-500',
            )}
            {...rest}
        >
            <Text
                className={clsx(
                    'font-bold text-lg text-white font-heading',
                    variant === 'secondary' && '!text-yellow-500 group-active:!text-white',
                )}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}
