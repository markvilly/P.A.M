import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
function simulateLoading(){
    return new Promise(resolve => setTimeout(resolve, 5000))
}
export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:9000/appointments"}),
    endpoints: builder => ({
        appointmentList: builder.query({
            query:  async ()=> {
                simulateLoading()
                return ''
            }
        })
    })

})

export const {useAppointmentListQuery} = api