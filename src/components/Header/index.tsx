import React from 'react'
import Image from 'next/Image'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'
import WalletConnector from '../WalletConnector'
import Balance from '../Balance'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="transparent" className={classes.root}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Image src="/assets/images/logo.svg" alt="Composable logo" width="109" height="31" />

          <Typography className={classes.menu}>Overview</Typography>
          <Typography className={classes.menu}>Portfolio</Typography>
          <Typography className={classes.menu}>Equal Cash</Typography>
          <Balance balance={256.325} />
          <WalletConnector address="0xc5711e067096B404356D93568Ef8aa6b8dA528E5" />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
