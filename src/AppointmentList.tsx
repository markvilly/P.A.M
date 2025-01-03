

export default function AppointmentList ({data}){

    return (
        <>
            <div className=" flex justify-center items-center">
                <table className = " table-auto border-2 rounded-lg mt-16">
                    <thead className=" bg-blue-100">
                        <tr className=" text-gray-500 ">
                            <th className=" font-semibold  p-5"><input type="checkbox" name="" id="" /></th>
                            <th className=" font-semibold  p-5">Patient ID</th>
                            <th className=" font-semibold  p-5">Patient Name</th>
                            <th className=" font-semibold  p-5">Date Check-in</th>
                            <th className=" font-semibold  p-5">Time</th>
                            <th className=" font-semibold  p-5">Status</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {
                            data.map(item=>(
                            <tr key={item.id}>
                                <td className=" px-5 py-2"><input type="checkbox" name="" id="" /></td>
                                <td className=" px-5 py-2">{item.id}</td>
                                <td className=" px-5 py-2">{item.patientName}</td>
                                <td className=" px-5 py-2">{item.date}</td>
                                <td className=" px-5 py-2">{item.time}</td>
                                <td className=" px-5 py-2">{item.status}</td>
                            </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}