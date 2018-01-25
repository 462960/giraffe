import { Routes } from "./Routes";
import React, { Fragment } from "react";
import { Invitation } from "./Invitation";
import asyncComponent from "./AsyncComponent";
import { UserFormContainer } from "../containers/UserFormContainer";

// Each of these dynamically imported components Webpack bundles in
// separated file to provide Lazy Loading
const AdvFormContainer = asyncComponent(() =>
  import("../containers/AdvFormContainer").then(module => module.default)
);

const AdvUnitContainer = asyncComponent(() =>
  import("../containers/AdvUnitContainer").then(module => module.default)
);

export let Main = props => {
  const { logged, adverts } = props;
  return (
    <Fragment>
      {logged.length == 0 ? (
        <UserFormContainer {...props} />
      ) : (
        <AdvFormContainer {...props} />
      )}
      {adverts.length == 0 ? (
        <Invitation {...props} />
      ) : (
        <AdvUnitContainer {...props} />
      )}
    </Fragment>
  );
};
