import React from 'react'
import { Button } from '../components/Button'
import { Grid } from '../components/Grid'
import { theme } from '../'

const createButtonDemo = (extraProps = {}) => {
  const buttonTypes = Object.keys(theme.colors)
  return (
    <Grid container>
      {buttonTypes.map(buttonType => (
        <>
          <Grid item xs={2} key={buttonType}>
            <Button variant={buttonType} {...extraProps}>
            HELLO
            </Button>
          </Grid>
          <Grid item xs={2} key={buttonType}>
            <Button variant={buttonType} {...extraProps} disabled>
            HELLO
            </Button>
          </Grid>
        </>
      ))}
    </Grid>
  )
}

export { createButtonDemo }
