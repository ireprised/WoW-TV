import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button } from '@mui/material';



const OrderData = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])
 
    useEffect(()=>{
        const url = `https://mighty-retreat-73527.herokuapp.com/orders/${user.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user.email])
    
    const handleDelete = (_id) => {

      const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
          const url = `https://mighty-retreat-73527.herokuapp.com/orders/${_id}`
          fetch(url,{
              method: 'DELETE'
  
          })
          .then(res => res.json())
          .then(data=>{
              if(data.deletedCount>0){
                const remainingOrders = orders.filter(order => order._id !==_id);
                setOrders(remainingOrders);
                <Alert severity="warning">Deleted successfully!</Alert>
              }
          })
        }


      
    }
    return (
        <div>
            <h3>Total Order here of you is :{orders.length}</h3>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Package Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.package_name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleDelete(row._id)} sx={{backgroundColor:'red'}} variant='contained'>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default OrderData;