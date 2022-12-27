import React from "react";
import oopsImage from '../assets/oops.jpg';
function ErrorPage() {
  return (
    <>
      <p>Something went wrong...</p>
        <img src={oopsImage} alt="Oooops" width={300} height={225} />
    </>
  );
}
export default ErrorPage;
