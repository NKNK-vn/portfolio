import { createContext } from 'react'
import PropTypes from 'prop-types'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const ThemeContext = createContext({
    isMobile
})

export const ThemeContextProvider = ({ children }) => {
    return <ThemeContext.Provider value={{ isMobile }}>{children}</ThemeContext.Provider>
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeContext
