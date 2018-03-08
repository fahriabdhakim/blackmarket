import React from "react"
import { Grid, Card, Image } from 'semantic-ui-react'
import { Route } from "react-router-dom"
import Clothesdata from "../data/Clothesdata"
import BuyButton from "../components/BuyButton"

const Clothes = ({ match }) => (
  <div className="container">
    <Grid centered="centered" columns={6} padded="padded">


          {Clothesdata.map((clothes) => {
            return (
              <Grid.Column mobile={6} tablet={4} computer={3}>
              <Card>

                <Card.Header>
                <Image src={clothes.image}/>
                </Card.Header>
                <Card.Content textAlign="center">
                  <b>{clothes.name}</b>
                  <p>{clothes.Type}</p>
                  <p>{clothes.Price}</p>
                </Card.Content>
                <Card.Content extra textAlign="center">
                  <BuyButton/>
                </Card.Content>
              </Card>
              </Grid.Column>
            )
          })}

    </Grid>
  </div>
)

export default Clothes
