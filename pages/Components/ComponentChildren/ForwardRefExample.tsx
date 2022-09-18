import React, { useImperativeHandle } from 'react'

function ForwardRefExample(props:any, ref:any) {
// export default function ForwardRefExample(props:any) {

    return (
        <input
        ref={ref}
    {...props}

    />
  )
}

export default React.forwardRef(ForwardRefExample)