import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string,
      title: string,
      red01: string,
      gray01: string,
      gray02: string,
      gray03: string,
      gray04: string,
      input01: string,
      button01: string,
    }
  }
}