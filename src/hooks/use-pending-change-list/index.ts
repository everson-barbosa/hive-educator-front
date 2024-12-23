import { useState } from "react";

interface UpdateProps<T> {
  readonly initialValues: T[]
  readonly newValues: T[]
  readonly compareFn?: (a: T, b: T) => boolean
}

interface PendingChangeList<T> {
  readonly toAdd: Set<T>
  readonly toRemove: Set<T>
  readonly update: (props: UpdateProps<T>) => void
  readonly reset: () => void
}

export function usePendingChangeList<T = unknown>(): PendingChangeList<T> {
  const [toAdd, setToAdd] = useState<Set<T>>(new Set())
  const [toRemove, setToRemove] = useState<Set<T>>(new Set())

  const update = ({ 
      initialValues, 
      newValues, 
      compareFn = (a: T, b: T) => a === b 
    }: UpdateProps<T>) => {
    const initialValuesAsSet = new Set(initialValues)
    const newValuesAsSet = new Set(newValues)

    const valuesToAdd = Array.from(newValuesAsSet)
      .filter(newValue => !initialValues
          .some(initialValue => compareFn(initialValue, newValue)))

    const valuesToRemove = Array.from(initialValuesAsSet)
      .filter(initialValue => !newValues
          .some((newValue) => compareFn(newValue, initialValue )))

    setToAdd(new Set(valuesToAdd))
    setToRemove(new Set(valuesToRemove))
  }

  const reset = () => {
    setToAdd(new Set())
    setToRemove(new Set())
  }

  return {
    toAdd, 
    toRemove,
    reset,
    update
  }
}