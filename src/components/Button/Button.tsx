import React from 'react'

export default function Button({ children }: { children: React.ReactNode | string }) {
  return <button>{children}</button>
}
