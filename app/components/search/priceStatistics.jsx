import React from 'react'
import PriceHistoryChart from './priceHistoryChart'

export default function PriceStatistics() {

  return (
    <div className='w-1/3'>
      <p className='text-h4 text-grey-600'>Price grid <span className='text-grey-400'>(flexible dates)</span></p>
      <table className='table-auto border rounded-lg  border-grey-200  text-center  text-grey-700 text-sm my-4'>
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
      <p className='text-h4 text-grey-600 mt-6'>Price History </p>

      <PriceHistoryChart price1={800} price2={600} price3={700} price4={600} price5={780} price6={550} price7={500} price8={750} price9={500}/>

      <div className='mt-6 '>
      <div className='mb-4'>
      <span className='text-h4 text-grey-600  '>Price Rating </span>
      <span className='text-h5 text-trueWhite bg-turquoise px-2 py-0.5 rounded-lg ml-4'>Buy soon</span>
      </div>
      <p  className='text-grey-600 mb-2'>We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.</p>
      <p  className='text-grey-300'>Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.</p>

      </div>


    </div>
  )
}
