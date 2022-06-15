export interface CompanyInterface {
    ceo: string
    employees: number
    founded: number
    founder: string
    links: {
        elon_twitter: string
        website: string
    }
    name: string
    summary: string
}

export interface ShipsInterface {
    id?: string
    image: string
    model: string
    name: string
    url: string
    year_built: number
}

export interface RocketsInterface {
    wikipedia: string
    name: string
    id?: string
    description: string
}

export interface HomeInterface {
    company?: CompanyInterface
    ships?: ShipsInterface[]
    rockets?: RocketsInterface[]
}

export interface CompanyTableConfigInterface {
    leftColumn: string
    rightColumn: number | JSX.Element
    id: number
}