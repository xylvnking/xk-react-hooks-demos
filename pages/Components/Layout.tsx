import React from 'react'
import layoutStyles from '../../styles/Layout.module.scss'
import { useRouter } from 'next/router'


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
    const router = useRouter()
    

    const handleClick = (optionSelected: string) => {
        selectHook(optionSelected)
        window.scrollTo({top: 700, behavior: 'smooth'})
    }

    const goHome = () => {
        router.push('/?hook=home', undefined, { shallow: true })
    }

  return (
    <div className={layoutStyles.nav}>
        <ul className={layoutStyles.list}>
            {/* <li className={layoutStyles.listItemTop}><a className={layoutStyles.listItemTopLink} href='/'>home</a></li> */}
            <li className={layoutStyles.listItemTop}><a className={layoutStyles.listItemTopLink} onClick={() => goHome()}>home</a></li>


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