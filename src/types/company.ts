interface AdminType {
    email: string,
    first_name: string
    last_name: string
}

export interface ICompany {
    id: number
    name: string
    company: string
}

export interface ICompanyDetails extends ICompany {
    logo: string
    number_of_users: number
    number_of_active_users: number
    server_address: string
    admin: AdminType
}