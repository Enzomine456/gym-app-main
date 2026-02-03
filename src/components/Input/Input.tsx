import clsx from 'clsx'
import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
    isInvalid?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorMessage?: string | any
}

export function Input({ isInvalid = false, errorMessage, ...rest }: InputProps) {
    return (
        <View className="">
            <TextInput
                className={clsx(
                    'w-full h-16 bg-white border border-yellow-300 rounded-md px-4 font-body text-base text-gray-800 focus:border-yellow-500 disabled:cursor-not-allowed',
                    isInvalid && '!border-red-500',
                )}
                textAlignVertical="top"
                placeholderTextColor="#7C7C8A"
                {...rest}
            />

            <Text className="font-body text-sm text-red-500"> {errorMessage} </Text>
        </View>
    )
}
