import React  from 'react'
import requests from '../requests'
import Main from '../Components/Main'
import Row from '../Components/Row'


const Home = () => {

  return (
    <>
    <Main/>
    <Row ROWID={Math.random()} title="Popular" key={Math.random()} fetchURL={requests.RequstPopular}/>
    <Row ROWID={Math.random()} title="TopRate" key={Math.random()} fetchURL={requests.RequstTopRate}/>
    <Row ROWID={Math.random()} title="Trends" key={Math.random()} fetchURL={requests.RequstTrend}/>
    <Row ROWID={Math.random()} title="Up Coming" key={Math.random()} fetchURL={requests.RequstUpComing}/>
    </>
  )
}

export default Home