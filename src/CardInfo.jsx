import React from 'react'

const CardInfo = () => {

  const selctCard = JSON.parse(localStorage.getItem("reduxState"))
  const cardData = selctCard.card[0]

  const hrefLink = cardData.link
  const summary = cardData.summary
  const catg = cardData.genres
  return (
    <>
      <div className="container card_info">
        <div className="row">
          <div className="col-md-12 col-lg-5">
            <div className="image">
              <img src={cardData.imgSrc} alt="..." />
            </div>
          </div>
          <div className="col-md-12 col-lg-7 my-3">
            <h4 className="title">{cardData.name}</h4>
            <div className="desc" dangerouslySetInnerHTML={{ __html: summary }}></div>
            <div className="type">Type:<span>{cardData.type}</span></div>
            <div className="language">Language:<span>{cardData.language}</span></div>
            <div className="country">Country:<span>{cardData.country}</span></div>
            <div className="genres">Category:<span>{catg.join(", ")}</span></div>
            <div className="status">status:<span>{cardData.status}</span></div>
            <div className="rating">rating:<span>{cardData.rating}</span></div>
            <div className="link"> <a href={hrefLink.toString()} target="_" style={{ pointerEvents: hrefLink ? "all" : "none" }}>{hrefLink ? "official Site" : "No site link found"}</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardInfo