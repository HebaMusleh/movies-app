import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '@/components/AppComponents'
import { Header } from '@/components/DetailsComponents'
import { Card } from '@/components/WatchListComponents'
import { useBookmarks } from '@/context/BookMarkContext'

type Props = {}

const WatchList = (props: Props) => {
    const { list } = useBookmarks();
  
  return (
    <Container>
      <Header
      title='WatchList'
      />
      <Card movie={list}/>
    </Container>
  )
}

export default WatchList