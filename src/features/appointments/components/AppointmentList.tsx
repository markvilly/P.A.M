import { useGetAppointmentsQuery, useDeleteAppointmentMutation} from "../Appointmentslice";

const AppointmentList = () => {
    const {data: appointments, isLoading, error} = useGetAppointmentsQuery()
    const [deleteAppointment] = useDeleteAppointmentMutation()
    console.log(error)
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error loading appointments!</p>

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {
                    appointments?.map((appointment)=>(
                        <li key={appointment.id}>
                            <p>
                                {appointment.patientName} - {appointment.date} at {appointment.time}
                            </p>
                            <button onClick={()=> deleteAppointment(appointment.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AppointmentList