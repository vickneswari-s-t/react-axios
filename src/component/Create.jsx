import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeaderBar from './Header'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';

function Create(){

    let [name,setName]=useState("")
    let [username,setUsername]=useState("")
    let [email,setEmail]=useState("")
    let [address,setAddress]=useState("")
    let [phone,setPhone]=useState("")
    let [website,setWebsite]=useState("")
    let [company,setCompany]=useState("")


    let navigate=useNavigate()

const handleCreate=async()=>{
    try {
        let data={name,username,email,address,phone,website,company,status:false}
        let res=await axios.post(API_URL,data)
        if (res.status===201){
            toast.success("Blog created successfully")
            navigate('/dashboard')
        }
        
    } catch (error) {}
}


    return <div className='container-fluid'>
  <HeaderBar/>
  <div className='homeform'>

  <div className='form'>
    <Form>
    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="your name"onChange={(e)=>{setName(e.target.value)}} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="enter username"onChange={(e)=>{setUsername(e.target.value)}} />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="enter email"onChange={(e)=>{setEmail(e.target.value)}}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="street"onChange={(e)=>{setAddress(e.target.value)}}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="text" placeholder="phone number"onChange={(e)=>{setPhone(e.target.value)}}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Website</Form.Label>
      <Form.Control type="text" placeholder="website"onChange={(e)=>{setWebsite(e.target.value)}}/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Company</Form.Label>
      <Form.Control type="text" placeholder="name"onChange={(e)=>{setCompany(e.target.value)}}/>
    </Form.Group>
    
    <Button variant="primary" onClick={()=>handleCreate()}>
      Submit
    </Button>
  </Form>
  </div>

  
  <div className='preview'>
        <h2 style={{textAlign:"center"}}>Preview</h2>
        <Cards
        name={name}
        username={username}
        email={email}
        address={address}
        phone={phone}
        website={website}
        company={company}/>
      </div>
  </div>
  </div>


}

export default Create