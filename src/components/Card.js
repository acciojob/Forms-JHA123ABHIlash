import React from 'react'

export default function Card({children,id}) {
  return (
    <div id={id}>
        {children}
    </div>
  )
}
