import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 2rem 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-title);
  max-width: 28rem;
  line-height: 3.5rem;
  margin-top: 5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 43.75rem;

  display: flex;

  input {
    flex: 1;
    height: 4.5rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.3rem;
    color: var(--text-title);

    &::placeholder {
      color: var(--text-body);
    }
  }

  button {
    width: 13rem;
    height: 4.5rem;
    background: var(--green);
    border: 0;
    color: var(--shape);
    border-radius: 0.3rem;
    font-weight: bold;
    margin-left: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 43.75rem;

  a {
    background: var(--shape);
    border-radius: 0.3rem;
    width: 100%;
    padding: 1.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 1rem;
    }

    transition: transform 0.2s;

    &:hover {
      transform: translateX(1rem);
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1rem;

      strong {
        font-size: 1.25rem;
        color: var(--text-description);
      }

      p {
        font-size: 1rem;
        color: var(--text-body);
        margin-top: 0.25rem;
      }
    }

    svg {
      margin-left: auto;
      color: var(--arrow);
    }
  }
`;
