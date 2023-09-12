import { useState } from 'react'
import { Pressable, Text } from '@gluestack-ui/themed'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export interface DatePickerProps {
  date: Date
  onDateChange: (_: Date) => void
}

export const DatePicker = ({ date, onDateChange }: DatePickerProps) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Pressable
        bg="$backgroundLight100"
        px="$4"
        py="$2"
        rounded="$sm"
        flex={1}
        alignItems="center"
        onPress={() => setModal(true)}
      >
        <Text fontSize="$sm">{date.toDateString()}</Text>
      </Pressable>

      <DateTimePickerModal
        date={date}
        onCancel={() => setModal(false)}
        isVisible={modal}
        mode="date"
        onConfirm={(date) => {
          onDateChange(date)
          setModal(false)
        }}
      />
    </>
  )
}
