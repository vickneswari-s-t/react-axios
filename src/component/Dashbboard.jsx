import React,{useEffect,useState} from 'react'
import HeaderBar from './Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {API_URL} from '../App'
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'


function Dashboard(){

    let navigate = useNavigate()
    let [data,setData] = useState([])


    const getBlogs=async()=>{
        try {
          let res = await axios.get(API_URL)
          if(res.status===200)
          {
            toast.success('Blogs fetched Successfully!')
            setData(res.data)
          }
        } catch (error) {
            toast.error("Internal Server Error")
        }
      }

//todelete the api diplayed data

    const handleDelete = async(id)=>{
        try {
          let res = await axios.delete(`${API_URL}/${id}`)
          if(res.status===200)
          {
            toast.success('Blog Deleted Successfully!')
            getBlogs()//after delete call getblogs to display already created one
          }
        } catch (error) {
          toast.error("Internal Server Error")
        }
      }


      const toggle = async(e)=>{
        try {
          e.status = !e.status
          // console.log(e)
          let res = await axios.put(`${API_URL}/${e.id}`,e)
          if(res.status===200)
          {
            toast.success('Blog Status Changed!')
            getBlogs()
          }
          
        } catch (error) {
          toast.error("Internal Server Error")
        }
      }
    
    
      useEffect(()=>{
        getBlogs()
      },[])



return <><div className='container-fluid'>
<HeaderBar/>

<div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Address</th>
          <th>phone</th>
          <th>website</th>
          <th>Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.address}</td>
              <td>{e.phone}</td>
              <td>{e.website}</td>
              <td>{e.company}</td>
              <td>
                <label className="switch">
                  <input type="checkbox" defaultChecked={e.status} onChange={()=>toggle(e)}/>
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <Button variant="info" onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                &nbsp;
                <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </div>
</>
  
   
}


export default Dashboard