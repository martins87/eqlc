import { Container } from '@material-ui/core'

import Title from '../components/Title'

const Home = () => {
  return (
    <Container>
      <Title
        centered
        title="Mint Equal Cash"
        top="Deposit your PAT receipts as collateral to mint EQLC. You can also withdraw PAT from your vault."
        bottom="This will affect your collateralization ratio, and may increase your risk of liquidation." />
    </Container>
  )
}

export default Home
