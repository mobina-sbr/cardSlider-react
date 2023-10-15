import React from 'react'
import CardItems from './CardItems'
import UnitState from './UnitState'

export default function Card({hero}) {
    return (
        <div className={`clash-card ${hero.name}`}>
            <div className={`clash-card__image clash-card__image--${hero.name}`}>
                <img src={hero.img} alt={hero.name} />
            </div>

            <CardItems classType={`clash-card__level clash-card__level--${hero.name}`}>{hero.level}</CardItems>
            <CardItems classType="clash-card__unit-name">{`the ${hero.name}`}</CardItems>
            <CardItems classType="clash-card__unit-description">{hero.description}</CardItems>
            <UnitState name={hero.name} units={hero.units}/>

        </div>
    )
}
