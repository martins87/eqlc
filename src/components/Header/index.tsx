import React from 'react'
import Image from 'next/Image'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="transparent" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Image src="/logo.svg" width="109" height="31" />

          <Box>
            <Typography variant="h4">Overview</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
