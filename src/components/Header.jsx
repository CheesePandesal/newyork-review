import React from 'react'
import SortAndSearch from './SortAndSearch'
import Buttons from './Buttons'

const Header = ({getSearch, setSearch, search, nextPage, prevPage, movieOrder, changeMovieOrder, offsetNum}) => {
  return (
    <header style={{textAlign: "center"}}>
        <h1>
        The New York Times Movie Reviews🎥
        </h1>
        <SortAndSearch getSearch={getSearch} setSearch={setSearch} search={search} movieOrder={movieOrder} changeMovieOrder={changeMovieOrder}/>
        <Buttons nextPage={nextPage} prevPage={prevPage} offsetNum={offsetNum}/>
    </header>
  )
}

export default Header