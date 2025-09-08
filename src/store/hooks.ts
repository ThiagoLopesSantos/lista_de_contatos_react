import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// Crie e exporte versões tipadas dos hooks.
// Usar estes hooks em toda a sua aplicação em vez do `useDispatch` e `useSelector` padrões.
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
