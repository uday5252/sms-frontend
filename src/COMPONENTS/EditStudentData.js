import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"

function EditStudentData() 
{
    // const [ data, setData ] = React.useState([])
    const [ myRollno, setRollNo ] = React.useState("")
    const [ myName, setName ] = React.useState("")
    const [ myCity, setCity ] = React.useState("")
    const [ myAge, setAge ] = React.useState("")


  //Logic to get the student data
  const { id } = useParams()//id = 1
  

  useEffect(function()
  {
    Axios.get(`https://sms-backendd-863i.onrender.com/read/data/${id}`)
    .then(function(output)
    {
        output.data.map(function(i)
        {
            setRollNo(i.rollNo)
            setName(i.name)
            setAge(i.age)
            setCity(i.city)
            // console.log(i.rollNo, i.name, i.age, i.city)
        })
        // setData(output.data)
    })
    .catch(function(error)
    {
        console.log(error)
    })
  })

  return (
    <div>
        <h4>Student Edit Form</h4>
         <div className='row'>
            <div className='col-md-6'>
            <form>
            <label for="rollNo">Roll Number:</label>
            <input type="text" id="rollNo" name="rollNo" value={myRollno}/>

            <label for="name">Name:</label>
            <input type="text" id="name" name="name"  value={myName}/>

            <label for="age">Age:</label>
            <input type="number" id="age" name="age"  value={myAge}/>

            <label for="city">City:</label>
            <input type="text" id="city" name="city"  value={myCity}/>

            <input type="submit" value="Submit"/>

        </form>
            </div>

         </div>
    </div>
  )
}

export default EditStudentData