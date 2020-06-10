import { createGlobalStyle } from 'styled-components'

const Baseline = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`

export { Baseline }
