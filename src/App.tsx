import AppointmentList from "./AppointmentList"
import { useAppointmentListQuery } from "./service/api"


function App() {
  

  
  const {data, isLoading, isSuccess} = useAppointmentListQuery('')
  console.log(data)
  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if(isSuccess){

    return (
      <div className=" bg-slate-200 h-lvh">
        <h1 className=" text-4xl font-bold flex justify-center text-blue-950 pl-11 pt-6">Welcome to your P.A.M</h1>
      
        <AppointmentList data={data}/>
      </div>
    )
  }
}

export default App
