export interface Appointment {
    id: number
    patientName: string
    date: string
    time: string
    reason: string
    status: 'Upcoming' | 'Completed' | 'Cancelled'
}