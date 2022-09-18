import React, {useEffect, useState} from 'react'

export default function CallbackHookChild(props:any) {

 const [items, setItems] = useState([])

  useEffect(() => {
      setItems(props.getItemsCallback())
  }, [props.getItemsCallback])

  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}