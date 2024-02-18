import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HeaderBar from './Header'
import Cards from './Cards'
import { useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
      
function Edit() {

  let {id}=useParams()

  let [name,setName]=useState("")
  let [username,setUsername]=useState("")
  let [email,setEmail]=useState("")
  let [address,setAddress]=useState("")
  let [phone,setPhone]=useState("")
  let [website,setWebsite]=useState("")
  let [company,setCompany]=useState("")
  let navigate = useNavigate()


  const handleEdit = async()=>{
    try {
      let data = {name,username,email,address,phone,website,company,status:false}
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status===200)
      {
        toast.success("Blog Edited Successfully")
        navigate('/dashboard')
      }

    } catch (error) {
      
    }
  }



  const getBlogById = async()=>{
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200)
      {
        setTitle(res.data.title)
        setImage(res.data.image)
        setDescription(res.data.description)
      }
    } catch (error) {
        toast.error("Internal Server Error")
    }
  }


  useEffect(()=>{
    getBlogById()
  },[])


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
    
    <Button variant="primary" onClick={()=>handleEdit()}>
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

export default Edit