import { Container } from './style'

export function Loading() {
  return (
    <Container>
      <svg height="100" width="100">
        <circle cx="10" cy="50" r="0"/>
        <circle cx="30" cy="50" r="0"/>
        <circle cx="50" cy="50" r="0"/>
      </svg>
    </Container>
  )
}