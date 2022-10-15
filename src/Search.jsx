import React, { useEffect, useState } from 'react'
import ResultCrads from './ResultCrads'

const Search = () => {

    const getLocalStorageData = () => {
       const localData = localStorage.getItem("UserInput")
       if (localData !== null) {
        return localData
       } else {
      return  "stranger"
       }
    }

    const [search, setSearch] = useState(getLocalStorageData)
    const [apiData, setApiData] = useState([])
    const getInput = (e) => {
        setSearch(e.target.value)
        localStorage.setItem("UserInput", e.target.value )
    }

    useEffect(() => {
        const getApiData = async () => {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
            const jsonResponse = await response.json()
            setApiData(jsonResponse)
        }
        getApiData()
    }, [search])



    return (
        <>
            <div className="container">
                <div className="wraper">
                    <input type="text" placeholder='Type the show name here...'
                        onChange={getInput}
                        value={search}
                    />
                </div>
                <div className="container_cards">
                    {
                        !apiData.length ?
                            <h1 className='error'>Data not found 😢.</h1>
                            :
                            apiData.map((val, i) => {
                                const imgSrc = val.show.image
                                const name = val.show.name
                                const summary = val.show.summary
                                const type = val.show.type
                                const language = val.show.language
                                const genres = val.show.genres
                                const status = val.show.status
                                const rating = val.show.rating.average
                                const country = val.show.network
                                const link = val.show.officialSite

                                return <ResultCrads key={i}
                                    imgSrc={imgSrc ? val.show.image.original : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"}
                                    name={name ? name : "No data found 😢"}
                                    summary={summary ? summary : "No data found 😢"}
                                    type={type ? type : "No data found 😢"}
                                    language={language ? language : "No data found 😢"}
                                    genres={genres.length ? genres : ["No data found 😢"]}
                                    status={status ? status : "No data found 😢"}
                                    rating={rating ? rating : "No data found 😢"}
                                     country={country ? val.show.network.country.name : "No data found 😢"}
                                    link={link ? link : false}
                                />
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default Search