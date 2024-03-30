import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BASE_API_URL: string = 'https://stimlabo.preprod.stimdata.fr/api'

interface Params {
    [name: string]: string | number
}

interface Response {
    [name: string]: any
}

const useFetch = () => {
    // Create an axios instance
    const instance = axios.create({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        baseURL: BASE_API_URL,
    })

    const fetch = async (url: string, params?: Params) => {
        const req = await instance.post(url, { ...params })
        return req
    }

    return { fetch }
}

export default useFetch
