import styled from "styled-components"

function Footer() {
  return (
    <Foot>
      <p>Powered by react. Copyright © 2021 ~ 2023</p>
    </Foot>
  )
}

const Foot = styled.div`
  font-size: 13px;
  color: #8590a6;
  text-decoration: none;
  margin-top: 15px;
`

export default Footer
