import Link from "next/link";
import React from "react";

import {CompanyInterface, CompanyTableConfigInterface} from "../../../interfaces/home.interface";

export const CompanyTableConfig = (company: CompanyInterface): CompanyTableConfigInterface[] => ([
        {
            id: 1,
            leftColumn: 'CEO',
            rightColumn: <Link href={company.links.elon_twitter} target={'_blank'}>
                <a>
                    {company.ceo}
                </a>
            </Link>
        },
        {
            id: 2,
            leftColumn: 'Employees',
            rightColumn: company.employees
        },
        {
            id: 3,
            leftColumn: 'Founded',
            rightColumn: company.founded
        }, {
            id: 4,
            leftColumn: 'Founder',
            rightColumn: <Link href={company.links.elon_twitter} target={'_blank'}>
                <a>{company.founder}
                </a>
            </Link>
        }
    ]
)