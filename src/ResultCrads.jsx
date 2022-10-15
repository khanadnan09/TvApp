import React from 'react'
import { useDispatch } from 'react-redux'
import { setCardData } from './ReduxStore/Cradslice'
import { Link } from 'react-router-dom'

const ResultCrads = (props) => {
    const allData = props
    const dispatch = useDispatch()

    const handleData = (CardData) => {
      return  dispatch(setCardData(CardData))
    }
    return (
        <>
            <div className="card">
                <div className="img"><img src={allData.imgSrc} alt="img" /></div>
                <div className="name" style={{ color: "#fff", padding: "10px" }}>{allData.name}</div>
                {/* <div className="summary" dangerouslySetInnerHTML={{ __html: summary }}></div>
                <div className="type">Type:<span>{allData.type}</span></div>
                <div className="language">Language:<span>{allData.language}</span></div>
                <div className="country">Country:<span>{allData.country}</span></div>
                <div className="genres">Category:<span>{catg.join(", ")}</span></div>
                <div className="status">status:<span>{allData.status}</span></div>
                <div className="rating">rating:<span>{allData.rating}</span></div>
                <div className="link"> <a href={hrefLink.toString()} target="_" style={{ pointerEvents: hrefLink ? "all" : "none" }}>{hrefLink ? "official Site" : "No site link found"}</a></div> */}
               <Link to="/cardinfo" onClick={()=>handleData(allData)}>Go To</Link>
            </div>

        </>
    )
}

export default ResultCrads