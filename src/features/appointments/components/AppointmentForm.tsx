import { useState } from "react";
import { useAddAppointmentMutation } from "../Appointmentslice";

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        date: '',
        time: '',
        reason: '',
        status: 'Upcoming'
    })

    const [addAppointment] = useAddAppointmentMutation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault()
        
        await addAppointment(formData);

        setFormData({
            patientName:'',
            date:'',
            time: '',
            reason: "",
            status: "Upcoming"

        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name='patientName'
                    placeholder="Patient Name"
                    value={formData.patientName}
                    onChange={handleChange}
                    required 
                />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
                <input type="time" name="time" value={formData.time} onChange={handleChange} required/>
                <input 
                    type="text"
                    name="reason"
                    placeholder="Reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    />

            </form>
        </div>
    )
}

export default AppointmentForm