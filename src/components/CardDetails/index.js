import React from 'react'

import './styles.scss'

const CardDetails = ({ card }) => {
  return (
    <div>
      <div className="detail-header">
        <div>
          <h2 className="name">{card.name}</h2>
          <h3 className="supertype">
            {card.supertype}
            <span> - </span>
            {card.subtype}
          </h3>
        </div>
        <div>
          <h4 className="hp">
            HP <span>{card.hp}</span> <span>{card.types}</span>
          </h4>
        </div>
      </div>
      <div className="detail-attacks">
        {card.attacks.map((attack, idx) => (
          <div key={idx}>
            <div>
              <h4>{attack.name}</h4>
            </div>
            <p>{attack.text}</p>
          </div>
        ))}
      </div>
      <div className="detail-power">
        <div className="weakness">
          <h5>weakness</h5>
          <div>{card.weaknesses[0].type}</div>
          <div>{card.weaknesses[0].value}</div>
        </div>
        <div className="resistances">
          <h5>resistances</h5>
          <div>{card.resistances[0].type}</div>
          <div>{card.resistances[0].value}</div>
        </div>
        <div className="retreat-cost">
          <h5>retreat cost</h5>
          <div>
            {card.retreatCost.map(cost => (
              <span>{cost}</span>
            ))}
          </div>
        </div>
        <div className="rarity">
          <h5>rarity</h5>
          <h4>{card.rarity}</h4>
        </div>
        <div className="artist">
          <h5>artist</h5>
          <h4>{card.artist}</h4>
        </div>
        <div className="set">
          <h5>set</h5>
          <h4>{card.set}</h4>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
