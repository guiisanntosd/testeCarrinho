import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, .1) inset;
  z-index: 1;

  .wrapper-modal {
    width: 30rem;
    min-height: 10rem;
    background: #FFF;
    padding: 10px;
    margin: 5.40rem auto;
    box-shadow: var(--shadow);
    border-radius: 15px;

    @media(max-width: 460px) {
      width: 25rem;
    }
  
    header {
      color: #348302;
      font-weight: 600;
      text-align: center;
      padding: 10px 0;
    }

    .wrapper-content {
      margin: 10px 0;
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    button {
      background: var(--white);
      color: var(--blue)
    }
  }
`;
