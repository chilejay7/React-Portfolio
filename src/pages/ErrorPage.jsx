import { useRouteError } from "react-router";

function ErrorPage() {
    const error = useRouteError();
    console.log(`***************Error*************`);
    console.log(error);
    console.log(`***************Error*************`);

    return (
        <div id="error-page">
            <h2 className="title">Error</h2>
            <p>An unexpected error has occurred.  Please try again.</p>
            <p>
                <i>{error.status || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;