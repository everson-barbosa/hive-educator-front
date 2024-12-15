import { renderHook, act } from '@testing-library/react';
import { useChangeSet } from './';

describe('useChangeSet', () => {
  it('should be able initialize with empty sets', () => {
    const { result } = renderHook(() => useChangeSet());

    expect(result.current.toAdd.size).toBe(0);
    expect(result.current.toRemove.size).toBe(0);
  });

  it('should be able add change to add values and to remove values on update', () => {
    const { result } = renderHook(() => useChangeSet<number>());

    act(() => {
      result.current.update({
        initialValues: [1, 2, 3],
        newValues: [2, 3, 4]
      })
    })

    expect(result.current.toAdd).toEqual(new Set([4]))
    expect(result.current.toRemove).toEqual(new Set([1]))
  })

  it('should be able compare complex values, example: objects', () => {
    interface Person { id: number, name: string }
    const { result } = renderHook(() => useChangeSet<Person>());

    act(() => {
      result.current.update({
        initialValues: [
          { id: 1, name: 'Joseph' }, 
          { id: 2, name: 'Clarence' }, 
          { id: 3, name: 'Mathew' }, 
        ],
        newValues: [
          { id: 2, name: 'Clarence' }, 
          { id: 3, name: 'Mathew' }, 
          { id: 4, name: 'Nick' }, 
        ],
        compareFn: (a: Person, b: Person) => a.id === b.id
      })
    })

    expect(result.current.toAdd).toEqual(new Set([{ id: 4, name: 'Nick' }]))
    expect(result.current.toRemove).toEqual(new Set([{ id: 1, name: 'Joseph' }]))
  })

  it('should be able reset values', () => {
    const { result } = renderHook(() => useChangeSet<number>());

    act(() => {
      result.current.update({
        initialValues: [1, 2, 3],
        newValues: [2, 3, 4],
      })
      result.current.reset()
    })

    expect(result.current.toAdd.size).toBe(0);
    expect(result.current.toRemove.size).toBe(0);
  })
});
