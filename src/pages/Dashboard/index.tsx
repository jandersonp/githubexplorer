import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Title, Form, Repositories } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore repositórios no Github</Title>

        <Form>
          <input placeholder="Digite o nome do repositorio" />
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
          <a href="teste">
            <img
              src="https://avatars.githubusercontent.com/u/25486388?v=4"
              alt="Jandersonp"
            />
            <div>
              <strong>rocketseat/unform</strong>
              <p>Performance-focused API for React forms </p>
            </div>

            <FiChevronRight size={20} />
          </a>

          <a href="teste">
            <img
              src="https://avatars.githubusercontent.com/u/25486388?v=4"
              alt="Jandersonp"
            />
            <div>
              <strong>rocketseat/unform</strong>
              <p>Performance-focused API for React forms </p>
            </div>

            <FiChevronRight size={20} />
          </a>

          <a href="teste">
            <img
              src="https://avatars.githubusercontent.com/u/25486388?v=4"
              alt="Jandersonp"
            />
            <div>
              <strong>rocketseat/unform</strong>
              <p>Performance-focused API for React forms </p>
            </div>

            <FiChevronRight size={20} />
          </a>
        </Repositories>
      </Content>
    </Container>
  );
}
