import React from 'react'
import State from './State';

export default function UnitState({name , units}) {
    const states = units
    ? units.map((el, index) => (
        <State
        state={el.state}
        value={el.value}
        key={index}
        noBorder={index === units.length - 1 ? "no-border" : ""}
        />
      ))
    : null;
    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {states}
        </div>
    )
}
