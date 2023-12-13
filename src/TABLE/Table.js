import React from 'react'

export const Table = () => {
    //in this table every padding is the same for the header and body to be in the same line
  return (
<table class="shadow-lg mx-auto mt-20 cursor-pointer">
  <tr>
  <th class="bg-theme-600  text-left px-8 py-4">#</th>
    <th class="bg-theme-600  text-left px-8 py-4">Name</th>
    <th class="bg-theme-600  text-left px-8 py-4">Age</th>
    <th class="bg-theme-600  text-left px-8 py-4">Email</th>
  </tr>
  <tr className='hover:bg-theme-800'>
    <td class=" px-8 py-4">1</td>
    <td class=" px-8 py-4">Alfreds Futterkiste</td>
    <td class=" px-8 py-4">24</td>
    <td class=" px-8 py-4">humphreyighomaria424@gmail.com</td>
  </tr>
  <tr className='hover:bg-theme-800'>
  <td class=" px-8 py-4">2</td>
    <td class=" px-8 py-4">Centro comercial Moctezuma</td>
    <td class=" px-8 py-4">28</td>
    <td class=" px-8 py-4">ricchxlx5hh@gmail.com</td>
  </tr>
  <tr className='hover:bg-theme-800'>
  <td class=" px-8 py-4">3</td>
    <td class=" px-8 py-4">Ernst Handel</td>
    <td class=" px-8 py-4">34</td>
    <td class=" px-8 py-4">ricchxxx242343@gmail.com</td>
  </tr>
</table>
  )
}
