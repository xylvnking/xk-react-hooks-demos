import React, { useImperativeHandle, forwardRef } from 'react'

function ForwardRefExample(props:any, ref:any) {
// export default function ForwardRefExample(props:any) {

    return (
        <input
        ref={ref}
    {...props}

    />
  )
}

export default forwardRef(ForwardRefExample)