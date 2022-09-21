import React, {useEffect, useState} from 'react'

export default function CallbackHookChild(props:any) {

 const [items, setItems] = useState([])

  useEffect(() => {
      console.log('useCallback child rendered')
      setItems(props.getItemsCallback())
  }, [props.getItemsCallback])

  return (
    <ul style={{display: 'flex', listStyle: 'none'}}>
      {items.map(item => <li style={{margin: '0px', padding: '0px', paddingRight: '10px', fontSize: '20px'}}key={item}>{item}</li>)}
    </ul>
  )
}