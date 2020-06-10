// import original module declarations
import 'styled-components'
import { Colors } from './types'

// and extend them!
declare module 'styled-components' {

  export interface DefaultTheme {
    breakpoints: {
      md: string;
      lg: string;
    };

    colors: Colors;
  }
}
