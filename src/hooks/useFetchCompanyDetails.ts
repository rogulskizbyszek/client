import { useState, useEffect } from 'react';
import { ICompanyDetails } from '../types/company';
import { fetchApi } from '../utils/fetchApi';
import { useParams } from 'react-router';

export function useFetchCompanyDetails() {
    let { companyId } = useParams<string>();
    const [companyDetails, setDetails] = useState<ICompanyDetails>()
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        setLoading(true)
        const response = await fetchApi(`https://api.recruitment.4soft.tech/details/${companyId}`)
        const data = await response.data
        console.log(data)
        setLoading(false)
        setDetails(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return [loading, companyDetails] as const
}