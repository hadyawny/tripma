import React from 'react'

export default function NeedSignInModal() {
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" ></div>
    <div className="p-10">
      <p className="text-h3 text-grey-600 mb-2">Upgrade seat</p>
      <p className="text-lg text-grey-400 mb-2">Upgrade your seat for only $199, and enjoy 45 percent more leg room, and seats that recline 40 percent more than economy.</p>
      <div className="flex items-end justify-end">
      </div>
    </div>
  </>
  )
}
