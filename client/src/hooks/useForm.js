// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialItems) => {
    const [ items, setItems ] = useState(initialItems)

    const handleChanges = (e) => {
        setItems({ ...items, [e.target.name]: e.target.value });
      };

      return [ items, handleChanges ] //CONSTANTLY CHECK ORDER OF ITEMS
}