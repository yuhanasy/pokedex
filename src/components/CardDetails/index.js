import React from 'react'

import './styles.scss'

const DetailHeader = ({ name, supertype, subtype, hp, types }) => {
  return (
    <div className="detail-header">
      <div>
        <h2 className="name">{name}</h2>
        <h3 className="supertype">
          {supertype}
          <span> - </span>
          {subtype}
        </h3>
      </div>
      <div>
        {hp && (
          <h4 className="hp">
            HP <span>{hp}</span> <i className={`energy ${types}`} />
          </h4>
        )}
      </div>
    </div>
  )
}

const DetailAttacks = ({ attacks }) => {
  return (
    <div>
      {attacks.map((attack, idx) => (
        <div className="detail-text" key={idx}>
          <div>
            <span>
              {attack.cost.map((cost, idx) => (
                <i className={`energy ${cost}`} key={idx} />
              ))}
            </span>
            <h4>
              {attack.name} <span>|</span> {attack.damage}
            </h4>
          </div>
          <p>{attack.text}</p>
        </div>
      ))}
    </div>
  )
}

const DetailText = ({ text }) => {
  return (
    <div>
      {text.map((t, idx) => (
        <div className="detail-text" key={idx}>
          <h4>Rules</h4>
          <p>{t}</p>
        </div>
      ))}
    </div>
  )
}

const DetailAbility = ({ name, text, type }) => {
  return (
    <div className="detail-text">
      <h4>
        {name} <span> | </span>
        {type}
      </h4>
      <p>{text}</p>
    </div>
  )
}

const DetailWeakness = ({ weaknesses }) => {
  return (
    <div className="box weakness">
      <h5 className="box-title">weakness</h5>
      {weaknesses ? (
        <div className="box-body">
          <i className={`energy ${weaknesses[0].type}`} />
          <span>{weaknesses[0].value}</span>
        </div>
      ) : (
        <div>N/A</div>
      )}
    </div>
  )
}

const DetailResistances = ({ resistances }) => {
  return (
    <div className="box resistances">
      <h5 className="box-title">resistances</h5>
      {resistances ? (
        <div className="box-body">
          <i className={`energy ${resistances[0].type}`} />
          <span>{resistances[0].value}</span>
        </div>
      ) : (
        <div>N/A</div>
      )}
    </div>
  )
}

const DetailRetreatCost = ({ retreatCost }) => {
  return (
    <div className="box retreat-cost">
      <h5 className="box-title">retreat cost</h5>
      {retreatCost ? (
        <div className="box-body">
          {retreatCost.map((cost, idx) => (
            <i className={`energy ${cost}`} key={idx} />
          ))}
        </div>
      ) : (
        <div>N/A</div>
      )}
    </div>
  )
}

const DetailFooter = (title, content) => {
  return (
    <div className="box detail-footer">
      <h5 className="box-title">{title}</h5>
      <h4 className="box-body">{content}</h4>
    </div>
  )
}

const CardDetails = ({ card }) => {
  console.log(card)
  return (
    <div className="card-details">
      {DetailHeader({
        name: card.name,
        supertype: card.supertype,
        subtype: card.subtype,
        hp: card.hp,
        types: card.types,
      })}
      {card.ability &&
        DetailAbility({
          name: card.ability.name,
          text: card.ability.text,
          type: card.ability.type,
        })}
      {card.attacks &&
        DetailAttacks({
          attacks: card.attacks,
        })}
      {card.text &&
        DetailText({
          text: card.text,
        })}
      <div className="detail-power">
        {DetailWeakness({
          weaknesses: card.weaknesses,
        })}
        {DetailResistances({
          resistances: card.resistances,
        })}
        {DetailRetreatCost({
          retreatCost: card.retreatCost,
        })}
        {DetailFooter('rarity', card.rarity)}
        {DetailFooter('artist', card.artist)}
        {DetailFooter('set', card.set)}
      </div>
    </div>
  )
}

export default CardDetails
