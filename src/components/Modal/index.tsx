import { Container } from './style'

interface Props {
  children: any
}

export function Modal(props: Props) {
  return (
    <Container>
      <div className="wrapper-modal">
        <header>
          <p>Compra finalizada!</p>
        </header>
        <div className="wrapper-content">
          {props.children}
        </div>
      </div>
    </Container>
  )
}