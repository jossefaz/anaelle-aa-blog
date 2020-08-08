import React, { Suspense } from "react";
export default (Component, props) => {
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};
