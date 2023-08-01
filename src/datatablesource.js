export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 },
{
field:"user",
headerName:"User",
width:230,
renderCell:(params)=>{
    return(
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avtar"/>
          {params.row.username}
        </div>
    );
},
},
{
    field:"email",
    headerName:"Email",
    width:230,
},
{
    field:"age",
    headerName:"Age",
    width:100,
},
{
    field:"status",
    headerName:"Status",
    width:160,
    renderCell:(params)=>{
        return(
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
        );
    },
},


];

export const userRows = [
    {
        id:1,
        username:"snow",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"active",
        email:"snow@gmail.com",
        age:25,
    },
    
    {
        id:2,
        username:"aditi",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"active",
        email:"aditi@gmail.com",
        age:22,
    },
    {
        id:3,
        username:"ranu",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"passive",
        email:"ranu@gmail.com",
        age:23,
    },
    {
        id:4,
        username:"sakshi",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"pending",
        email:"sakshi@gmail.com",
        age:24,
    },
    {
        id:5,
        username:"sanu",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"active",
        email:"sanu@gmail.com",
        age:30,
    },
    {
        id:6,
        username:"neina",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"pending",
        email:"neina@gmail.com",
        age:23,
    },
    {
        id:7,
        username:"riya",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"pending",
        email:"riya@gmail.com",
        age:28,
    },
    {
        id:8,
        username:"priya",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_u_PtxTmcUPIQdvEAaA6lv1RN-LISIfY_Vw&usqp=CAU",
        status:"passive",
        email:"priya@gmail.com",
        age:20,
    },

]