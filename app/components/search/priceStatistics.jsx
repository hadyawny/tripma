import React from 'react'

export default function PriceStatistics() {

  return (
    <div>
      <p className='text-h4 text-grey-600'>Price grid <span className='text-grey-400'>(flexible dates)</span></p>
      <table className='table-auto border rounded-lg  border-grey-200  text-center  text-grey-700 text-sm mt-4'>
        <thead>
          <tr>
            <th className='border border-grey-200 px-6 py-3'> </th>
            <th className='border border-grey-200 px-6 py-3'>2/12</th>
            <th className='border border-grey-200 px-6 py-3'>2/13</th>
            <th className='border border-grey-200 px-6 py-3'>2/14</th>
            <th className='border border-grey-200 px-6 py-3'>2/15</th>
            <th className='border border-grey-200 px-6 py-3'>2/16</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th className='border border-grey-200 px-6 py-3'>3/7</th>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$1308</td>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
          </tr>
          <tr>
          <th className='border border-grey-200 px-6 py-3'>3/8</th>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$1308</td>
          </tr>
          <tr>
          <th className='border border-grey-200 px-6 py-3'>3/9</th>
          <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$1308</td>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
          </tr>
          <tr>
          <th className='border border-grey-200 px-6 py-3'>3/10</th>
          <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$1308</td>
          </tr>
          <tr>
          <th className='border border-grey-200 px-6 py-3'>3/11</th>
          <td className='border border-grey-200 px-6 py-3'>$837</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$592</td>
            <td className='border border-grey-200 px-6 py-3'>$1308</td>
            <td className='border border-grey-200 px-6 py-3'>$837</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
