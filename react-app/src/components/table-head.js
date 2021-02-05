import React from 'react'

export default function Table({sortByName, sortByCity, sortByAge}) {
    return (
          <thead>
            <tr>
            <th>Photo</th>
            <th><button onClick={sortByName}>Name</button></th>
            <th><button onClick={sortByCity}>City</button></th>
            <th>Phone Number</th>
            <th>Email</th>
            <th><button onClick={sortByAge}>DOB</button></th>
            </tr>
          </thead>
    )
}