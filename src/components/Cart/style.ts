import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const CartBox = styled.div`
  background: var(--white);
  box-shadow: var(--shadow);
  width: 25rem;
  height: 35rem;
  margin: 0 auto;
  border-radius: 20px;

  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  header {
    width: 100%;
    padding: 15px 0;
    text-align: center;
    box-shadow: 0 8px 5px -3px #ECECECEC;
    h1 {
      font: 600 1.3rem 'Poppins', sans-serif;
    }
  }

  footer {
    width: 100%;
    height: auto;
    min-height: 10rem;
    max-height: 12rem;
    padding: 10px 15px;
    box-shadow: 0 -8px 5px -3px #ECECECEC;

    .wrapper-price {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-items: center;

      .prices {
        span {
          font-size: .9rem;
          color: var(--gray)
        }
      }
    }

    .wrapper-shipping {
      background: #C3EDA6;
      padding: 5px;
      border-radius: 20px;
      margin: 5px 0;
      p {
        text-align: center;
        color: #348302;
        font-weight: 500;
      }
    }
  }
`;

export const CartContent = styled.div`
  width: 100%;
  padding: 10px;
  height: auto;
  min-height: 10rem;
  max-height: 19.5rem;
  overflow-y: auto;

  scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; -webkit-transform: translateZ(0);
  ::-webkit-scrollbar {width: 4px !important; background-color: transparent; height: 10px!important;}
  ::-webkit-scrollbar-track {-webkit-box-shadow: none !important;background-color: transparent; border-radius: 6px;}
  ::-webkit-scrollbar-thumb {background: rgb(46 52 54 / .2); border-radius: 5px;}
`;

export const CartProduct = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;

  .wrapper-image {
    width: 8rem;
    padding: 10px;
    margin: 0 5px 10px 0;
    border: solid 1px var(--gray);
    border-radius: 10px;

    img {
      width: 100%;
      height: 5rem;
      object-fit: cover;
    }
  }

  .wrapper-product {
    width: 14rem;
    padding: 10px;

    h4 {
      line-height: 1;
      margin-bottom: 10px;
    }

    span {
      font-size: .9rem;
      color: var(--gray);
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  background: var(--blue);
  color: var(--white);
  margin-top: 20px;
  padding: 15px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  transition: all .4s ease-in-out;

  :hover {
    background: var(--white);
    color: var(--blue);
    box-shadow: var(--shadow);
  }
`;