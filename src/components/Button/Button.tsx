import React from 'react'

export default function Button({ children }: { children: React.ReactNode | string }) {
  return (
    <button
      onClick={() => {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          alert('U HAVE BEEN HACKED SUCKER!!!!!')
        }
      }}
    >
      {children}
    </button>
  )
}
