import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '@/components/AppComponents'
import { Header } from '@/components/DetailsComponents'
import { Card } from '@/components/WatchListComponents'

type Props = {}

const WatchList = (props: Props) => {
  return (
    <Container>
      <Header
      title='WatchList'
      />
      <Card/>
    </Container>
  )
}

export default WatchList