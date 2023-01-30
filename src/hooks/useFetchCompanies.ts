import { useState, useEffect } from 'react';
import { ICompany } from '../types/company';
import { fetchApi } from '../utils/fetchApi';

export function useFetchCompanies() {
    const [companies, setCompanies] = useState<ICompany[]>([])
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        setLoading(true)
        const response = await fetchApi('https://api.recruitment.4soft.tech/list')
        const data = await response.data
        console.log(data)
        setLoading(false)
        setCompanies(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return [loading, companies] as const
}