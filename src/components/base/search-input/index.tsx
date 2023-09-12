import { Input, InputIcon, SearchIcon } from '@gluestack-ui/themed'
import { TextInput } from 'react-native'

export interface SearchInputProps {
  value: string
  onChangeText: (_: string) => void
}

export const SearchInput = ({ value, onChangeText }: SearchInputProps) => (
  <Input variant="outline" bg="$backgroundDark100" borderWidth={0}>
    <InputIcon ml="$3">
      <SearchIcon />
    </InputIcon>

    {/* WORKAROUND UNTIL FIX */}
    {/* https://github.com/gluestack/gluestack-ui/issues/829 */}
    <TextInput
      placeholderTextColor="gray"
      style={{ fontSize: 15, paddingHorizontal: 8 }}
      value={value}
      onChangeText={onChangeText}
      placeholder="Search"
    />
  </Input>
)
