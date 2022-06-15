import React from "react";
import Typography from "@mui/material/Typography";
import {LaunchesInterface} from "../../interfaces/lauches.interface";

import {DataGrid} from "@mui/x-data-grid";
import {launchesColumns} from "./launches.config";

const Launches = ({launches}: LaunchesInterface) => {
    return (
        <>
            <Typography variant="h2" textAlign='center'>Launches</Typography>

            <div style={{height: 700, width: '100%'}}>
                {(launches || [])?.length > 0 ?
                    <DataGrid
                        rows={launches || []}
                        columns={launchesColumns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    /> :
                    <Typography variant="h4" textAlign='center'>No Data</Typography>
                }
            </div>
        </>
    )
}

Launches.defaultProps = {
    launches: []
}

export default Launches
