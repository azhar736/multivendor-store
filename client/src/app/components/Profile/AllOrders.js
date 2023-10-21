import Link from 'next/link';
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

function AllOrders() {
    const orders=[
        {
            _id:"761112222ab1333",
            orderItems : [
                {
                    name:"Iphone 14 Pro pro max",
                }
                ,
            ],
            totalPrice:129,
            orderStatus:"Processing",
        },
    ]

    const coulmns = [
        {field:"id",headerName:"Order ID",minWidth:150, flex:0.7},
        {
            field:"status",
            headerName:"Status",
            minWidth:130,
            flex:0.7,
            cellClassName: (params) => {
                return params.row.status === "Delivered"
                    ? "greenColor"
                    : "redColor";
            }
        },
        {
            field:"itemsQty",
            headerName:"Items Qty",
            type:"number",
            minWidth:130,
            flex:0.7,
        },
        {
            field:"total",
            headerName:"Total",
            type:"number",
            minWidth:130,
            flex:0.8,
        },
        {
            field:" ",
            flex:1,
            minWidth:150,
            headerName:"",
            type:"number",
            sortable:false,
            renderCell : (params) =>{
                return (
                    <>
                    <Link href={`/order/${params.id}`}>
                        <Button>
                            <AiOutlineArrowRight size={30} />
                        </Button>
                    </Link>
                    </>
                )
            }
        }
    ]

    const row =[];
    console.log("The order array is", orders);
    orders && orders.forEach((item) =>{
        console.log("Each Item",item);
        console.log("Each Item",item.orderItems.length);
        row.push({
            id:item._id,
            itemQty:item.orderItems.length,
            total: "US$" + item.totalPrice,
            status:item.orderStatus
        })
    })
  return (
    <div className='pl-8 pt-1'>
        <DataGrid 
        rows={row}
        columns={coulmns}
        pageSize={20}
        disableRowSelectionOnClick
        autoHeight
        />
    </div>
  )
}

export default AllOrders