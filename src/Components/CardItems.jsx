import React from 'react'

export default function CardItems({children , classType}) {
  return (
    <div className={classType}>{children}</div>
  )
}
