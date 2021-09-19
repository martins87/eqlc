import { Container } from '@material-ui/core'

import Title from '../components/Title'

const Portfolio = () => {
  return (
    <Container>
      <Title
        centered
        title="Portfolio"
        top="This is the portfolio page"
        bottom="Portfolio data and stuff" />
    </Container>
  )
}

export default Portfolio
