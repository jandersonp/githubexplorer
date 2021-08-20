import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Github Explorer" />
        <h1>Explore repositórios no Github</h1>
      </Content>
    </Container>
  );
}
