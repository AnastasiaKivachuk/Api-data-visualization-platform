import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Typography from "@mui/material/Typography";

import {CompanyTableConfig} from "./companyTableConfig";
import CompanyTable from "../../../components/CompanyTable";
import {CompanyInterface} from "../../../interfaces/home.interface";

type Props = {
    company: CompanyInterface
}
const Company = ({company}: Props) => {

    const Wrapper = styled.div`
      margin: 30px 0;
    `;

    return (
        <Wrapper>
            <Typography variant="h2" textAlign='center'>
                <Link href={company.links.website} target={'_blank'}>
                    <a>{company.name}</a>
                </Link>
            </Typography>
            <Typography variant='h6' textAlign='center'>{company.summary}</Typography>
            <CompanyTable config={CompanyTableConfig(company)}/>
        </Wrapper>
    )
}

export default Company
