import { useState } from "react";

export function useModalHandler() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => { setIsOpen(true) }
  const close = () => { setIsOpen(false) }

  return {
    isOpen,
    open, 
    close
  }
}