import React, {FC} from 'react';

import ErrorPage from "../components/ErrorPage";

const Custom500Page: FC = () => (
    <ErrorPage
        error="500"
        text="The server encountered an internal error or misconfiguration. Please, refresh this page or try again later."
    />
);

export default Custom500Page;
