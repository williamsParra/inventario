import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../hooks/useCounter'

test('should increment the count', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
        result.current.increment()
    })
    expect(result.current.count).toBe(1)
})

test('should decrement the count', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
        result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
})
