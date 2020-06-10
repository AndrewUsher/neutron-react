import { PACKAGE_NAME } from '../constants'

const warn = (message: string): void => {
  console.warn(`${PACKAGE_NAME}: ${message}`)
}

export { warn }
