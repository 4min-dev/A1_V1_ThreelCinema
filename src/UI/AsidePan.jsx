import React from 'react'

export const AsidePan = ({className,children}) => {
  return (
    <aside className={className}>
        {children}
    </aside>
  )
}