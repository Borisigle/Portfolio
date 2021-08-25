import { extendTheme } from "@chakra-ui/react"
import {theme} from  './styles'
import { Text } from './components/text'

console.log(theme)

const myTheme = {
    styles :{
        global : {
            body : {
                bg: '#000000'
            }
        }
    },
    components : {
        Text,
    }
}

export default extendTheme(myTheme)