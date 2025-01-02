import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:9000/appointments"}),
    endpoints: builder => ({
        appointmentList: builder.query({
            query: ()=> ""
        })
    })

})

export const {useAppointmentListQuery} = api