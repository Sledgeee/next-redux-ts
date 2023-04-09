import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useExample = () => useTypedSelector(state => state.example.example)
