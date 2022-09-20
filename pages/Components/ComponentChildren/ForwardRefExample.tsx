import React, { useImperativeHandle, forwardRef } from 'react'
// import hookStyles from '../../../styles/Hooks.module.scss'
function ForwardRefExample(props:any, ref:any) {
// export default function ForwardRefExample(props:any) {

    return (
        <textarea
        // className={hookStyles.textAreaFromExample}
        ref={ref}
    {...props}

    />
  )
}

export default forwardRef(ForwardRefExample)