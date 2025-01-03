

export default function AppointmentList ({data}){

    return (
        <>
            <div>
                <table className = " table-auto">
                    <thead>
                        <tr className=" text-gray-500 ">
                            <th className=" font-normal">Patient ID</th>
                            <th className=" font-normal">Patient Name</th>
                            <th className=" font-normal">Date Check-in</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {
                            data.map(item=>(
                            <tr key={item.id}>
                                <td><input type="checkbox" name="" id="" /></td>
                                <td>{item.id}</td>
                                <td>{item.patientName}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.status}</td>
                            </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}