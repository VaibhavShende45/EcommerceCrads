import React from 'react'

const AdminCardList = () => {
    let CardList= JSON.parse(localStorage.getItem("myList"));
console.log(CardList)
  return (
    <>
    <div>Card List</div>
    <table border={1}>
        <thead>
            <tr>
                <th>Brand Logo</th>
                <th>Company</th>
                <th>Post</th>
                <th>Date Posted</th>
                <th>Job Type</th>
                <th>Role</th>
                <th>Amount</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {CardList.map((m, i) => (
            <tr key={i}>
                <td><img src={m.brandLogo} width={50} /></td>
                <td>{m.companyName}</td>
                <td>{m.post}</td>
                <td>{m.datePosted}</td>
                <td>{m.tag1}</td>
                <td>{m.tag2}</td>
                <td>{m.pay}</td>
                <td>{m.location}</td>
            </tr>
            ))}
        </tbody>  
    </table>
    </>
  )
}

export default AdminCardList