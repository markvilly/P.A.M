//  RTK QUERY API slice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Appointment} from "./types"

export const appointmentsApi = createApi({
    reducerPath: 'appointmentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:6000/', mode: "no-cors"}),
    tagTypes: ['Appointments'],
    endpoints: (builder)=>({
        getAppointments: builder.query < Appointment[], void>({
            query: ()=> 'appointments',
            providesTags: ['Appointments'],
        }),
        addAppointment: builder.mutation<Appointment, Partial<Appointment>>({
            query: (appointment)=>({
                url: 'appointments',
                method:'POST',
                body: appointment,
            }),
            invalidatesTags: ['Appointments'],
        }),
        updateAppointment: builder.mutation<Appointment, Appointment>({
            query: ({id, ...rest})=>({
                url: `appointments/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Appointments'],
        }),
        deleteAppointment: builder.mutation<void, number>({
            query: (id) => ({
                url: `appointments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Appointments'],
        }),
    })
})

export const {
    useGetAppointmentsQuery,
    useAddAppointmentMutation,
    useUpdateAppointmentMutation,
    useDeleteAppointmentMutation
} = appointmentsApi