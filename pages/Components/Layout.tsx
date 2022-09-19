import React from 'react'
import layoutStyles from '../../styles/Layout.module.scss'


type Props = {

    selectHook: Function   
    hookSelected: string 
}


const options = [
    'useState', 
    'useEffect',
    'useRef',
    'useMemo',
    'useCallback',
    'useContext',
    'useReducer'

]

export default function Layout({selectHook, hookSelected}: Props) {

    const handleClick = (optionSelected: string) => {
        selectHook(optionSelected)
    }

    // const []
  return (
    <div className={layoutStyles.nav}>
        <ul className={layoutStyles.list}>
            <li className={layoutStyles.listItemTop}><a className={layoutStyles.listItemTopLink} target='_blank' href='https://github.com/xylvnking/xk-react-hooks-demos'>github</a></li>
            {/* <li className={layoutStyles.listItem} onClick={() => handleClick(options[0])}> {options[0]} </li>
            <li className={layoutStyles.listItem} onClick={() => handleClick(options[1])}> {options[1]} </li>
            <li className={layoutStyles.listItem} onClick={() => handleClick(options[2])}> {options[2]} </li>
            <li className={layoutStyles.listItem} onClick={() => handleClick(options[3])}> {options[3]} </li>
            <li className={layoutStyles.listItem} onClick={() => handleClick(options[4])}> {options[4]} </li>
            <li className={layoutStyles.listItem} onClick={() => handleClick(options[5])}> {options[5]} </li>
            <li className={layoutStyles.listItem} onClick={() => handleClick(options[6])}> {options[6]} </li> */}
            {
                options.map((option, index) => {
                    if (hookSelected == option) {
                        return (
                            <li key={index} className={`${layoutStyles.listItem} ${layoutStyles.listItemSelected}`} onClick={() => handleClick(options[index])}> {options[index]} </li>
                            )
                        } else {
                            return (
                            <li key={index} className={layoutStyles.listItem} onClick={() => handleClick(options[index])}> {options[index]} </li>

                        )
                    }
                })
            }
        </ul>

    </div>
  )
}