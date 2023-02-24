import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const errordata = useRouteError();
  return (
    <>
      <h1>This is ErrorComponent</h1>
      <h1>{errordata.statusText||errordata.message}</h1>
    </>
  );
};
export default ErrorComponent;
