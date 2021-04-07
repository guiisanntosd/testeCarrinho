import { Container, CartBox, CartContent, CartProduct, Button } from './style'
import { useEffect, useState } from 'react'
import { Loading } from '../Loading'
import api from '../../services/api'
import { Modal } from '../Modal'

interface ItemProps {
  id: string
  imageUrl: string,
  name: string,
  quantity: number,
  price: number,
  sellingPrice: number,
  priceTags: [
    {
      value: string
    }
  ]
}

interface TotalizerProps {
  id: string,
  name: string,
  value: number
}

export function Cart() {
  const [items, setItems] = useState<ItemProps[]>([])
  const [totalizers, setTotalizers] = useState<TotalizerProps[]>([])
  const [cartValue, setCartValue] = useState()
  const [url, setURL] = useState('secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210407T040216Z&X-Amz-Expires=86400&X-Amz-Signature=c8c97ef6f5b2a075c212f070982a871c6ac008e432e9bb74ffb2e06046de157f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22')
  const [toggle, setToggle] = useState(false)

  function handlerToggle() {
    setToggle(!toggle)
  }

  function handlerURL(URL: string) {
    if (URL === 'secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210407T041316Z&X-Amz-Expires=86400&X-Amz-Signature=627d31be8e0cab1e8b9f9a5cba073b40065f67b30c81ad5a3ec2caef51f89763&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22')
      setURL('secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210407T040216Z&X-Amz-Expires=86400&X-Amz-Signature=c8c97ef6f5b2a075c212f070982a871c6ac008e432e9bb74ffb2e06046de157f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22')
    else
      setURL('secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210407T041316Z&X-Amz-Expires=86400&X-Amz-Signature=627d31be8e0cab1e8b9f9a5cba073b40065f67b30c81ad5a3ec2caef51f89763&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22')
  }

  useEffect(() => {
    api.get(url, {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then(res => {
      setItems(res.data.items)
      setTotalizers(res.data.totalizers)
      setCartValue(res.data.value)
    })
  }, [url])

  function intToMoney(int: number) {
    return (int/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  if(!totalizers.length) {
    return <Loading/>
  }

  return (
    <Container>
      {
        toggle && 
        <Modal>
          <p><strong>Quantity de produtos</strong> { items.map(item => item.quantity).reduce((a, b) => a+b) }.unid</p>
          <br/>
          <p><span>Valor bruto</span> { intToMoney(totalizers[0].value) }</p>
          <p><span>Desconto da compra</span> { intToMoney(totalizers[1].value) }</p>
          <p><strong>Total</strong> { intToMoney(Number(cartValue)) }</p>
          <Button onClick={
            () => {
              handlerToggle()
              handlerURL(url)
            }
          }>Trocar de carrinho</Button>
        </Modal>
      }
      <CartBox>
        <header>
          <h1>Meu carrinho</h1>
        </header>
        <CartContent>
          {
            items.map(item => {
              return (
                <CartProduct key={item.id}>
                  <div className="wrapper-image">
                    <img src={ item.imageUrl } alt=""/>
                  </div>
                  <div className="wrapper-product">
                    <h4>{ item.name }</h4>
                    <span>{ intToMoney(item.price) }</span>
                    <p><strong>{ intToMoney(item.sellingPrice) }</strong></p>
                  </div>
                </CartProduct>
              )
            })
          }
        </CartContent>
        <footer>
          <div className="wrapper-price">
            <p><strong>Total</strong></p>
            <div className="prices">
              <span>{ intToMoney(totalizers[0].value) }</span>
              <p><strong>{ intToMoney(Number(cartValue)) }</strong></p>
            </div>
          </div>
          { totalizers[0].value > 1000 && 
            <div className="wrapper-shipping">
              <p>Parabéns, sua compra tem frete grátis !</p>
            </div>  
          }
          <Button onClick={
            () => {
              handlerToggle()
            }
          }>Finalizar compra</Button>
        </footer>
      </CartBox>
    </Container>
  )
}