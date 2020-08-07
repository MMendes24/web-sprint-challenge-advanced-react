// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialItems) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [ items, setItems ] = useState(initialItems)


    const handleChanges = (e) => {
        setItems({ ...items, [e.target.name]: e.target.value });
      };



      return [ showSuccessMessage, setShowSuccessMessage, items, handleChanges ] //CONSTANTLY CHECK ORDER OF ITEMS
}