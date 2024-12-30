import React from 'react'

export default function ZodError({errorMsg= null}) {
  return (
    <div>
      {errorMsg && <p className='text-red'>{errorMsg}</p>}
    </div>
  )
}
