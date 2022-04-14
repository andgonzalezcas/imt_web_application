/* import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Login from "../components/Login"

function Home () {
  const [clicked, setClicked] = useState(false);
  const [ethereumValueUsd, setEthereumValueUsd] = useState(0);
  const [ethereumValueEur, setEthereumValueEur] = useState(0);
  const URL_ETHEREUM = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=';

  const handleClick = () => { setClicked(!clicked) }

  useEffect(() => { 
    fetch(`${URL_ETHEREUM}usd`)
      .then((response) => response.json())
      .then((data) => setEthereumValueUsd(data.ethereum.usd))
    fetch(`${URL_ETHEREUM}eur`)
      .then((response) => response.json())
      .then((data) => setEthereumValueEur(data.ethereum.eur))
    console.log('Clickeado')
  }, [clicked])

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Currencies</th>
            <th>Currency Sign</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>$</td>
            <td>{ethereumValueUsd}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>€</td>
            <td>{ethereumValueEur}</td>
          </tr>
        </tbody>
      </Table>
      <Button onClick={handleClick} variant="info ">Click Here</Button>{' '}
    </>
  )
}

export default Home */

/* import { Button, Table, Spinner } from "react-bootstrap";
import React from "react";

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      URL_ETHEREUM: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=',
      ethereumValueUsd: {
        isLoading: false,
        value: 0
      },
      ethereumValueEur: {
        isLoading: false,
        value: 0
      }
    }
  }

  componentDidMount() {
    this.setState({ ethereumValueUsd: { isLoading: true }})
    this.setState({ ethereumValueEur: { isLoading: true }})
    fetch(`${this.state.URL_ETHEREUM}usd`)
      .then((response) => response.json())
      .then((data) => this.setState({ ethereumValueUsd: {value: data.ethereum.usd, isLoading: false} }))
    fetch(`${this.state.URL_ETHEREUM}eur`)
      .then((response) => response.json())
      .then((data) => this.setState({ ethereumValueEur: {value:data.ethereum.eur, isLoading: false} }))
  }

  componentDidUpdate() {
    console.log('no realizar set state aqui es lo mejor c:')
  }

  componentWillUnmount() {}
  //shouldComponentUpdate() {}
  //getDerivedStateFromProps() {}
  //getSnapshotBeforeUpdate() {}

  handleClick = () => { 
    fetch(`${this.state.URL_ETHEREUM}usd`)
      .then((response) => response.json())
      .then((data) => this.setState({ ethereumValueUsd: {value: data.ethereum.usd, isLoading: false} }))
    fetch(`${this.state.URL_ETHEREUM}eur`)
      .then((response) => response.json())
      .then((data) => this.setState({ ethereumValueEur: {value:data.ethereum.eur, isLoading: false} }))
  }

  render () {
    const { ethereumValueUsd, ethereumValueEur } = this.state
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Currencies</th>
              <th>Currency Sign</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>$</td>
              <td>{ethereumValueUsd.isLoading ? <Spinner animation="border" variant="info" />: ethereumValueUsd.value}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>€</td>
              <td>{ethereumValueEur.isLoading ? <Spinner animation="border" variant="info" />: ethereumValueEur.value}</td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={this.handleClick} variant="info ">Click Here</Button>{' '}
      </>
    )
  }
}

export default Home */