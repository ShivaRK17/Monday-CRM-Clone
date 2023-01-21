import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import TicketCard from '../components/TicketCard'
import CategoriesContext from '../context'

const Dashboard = () => {

  const [tickets, setTickets] = useState(null)
  const {categories, setCategories} = useContext(CategoriesContext)


  useEffect(() => {
    async function fetchData(){
    const resp = await axios.get('http://localhost:8000/tickets')
    const dataObj = resp.data.data;
    const arrayofKeys = Object.keys(dataObj);
    const arrayofData = Object.keys(dataObj).map(key=> dataObj[key])
    // console.log(arrayofKeys);
    // console.log(arrayofData);
    const formattedArray = []
    arrayofKeys.forEach((key,ind)=>{
      const formData = {...arrayofData[ind]}
      formData['documentId'] = key
      formattedArray.push(formData);
    })
    // console.log(formattedArray);
    setTickets(formattedArray)
    }
    fetchData();
  }, [])

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))])
  }, [tickets])
  
  

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]

  const uniqueCat = [
    ...new Set(tickets?.map(({ category }) => { return category }))
  ]
  return (
    <div className='dashboard'>
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets && uniqueCat?.map((uncat, catind) => 
          (<div key={catind}>
            <h3>{uncat}</h3>
            {tickets.filter((ticket) =>  ticket.category === uncat )
              .map((filtick, _ind) => 
                (<TicketCard id={_ind} color={colors[catind]||colors[0]} ticket={filtick} />)
              )}
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default Dashboard