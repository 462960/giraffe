import { Routes } from "./Routes";
import React, { Fragment } from "react";
import { Invitation } from "./Invitation";
import { AdvFormContainer } from "../containers/AdvFormContainer";
import { AdvUnitContainer } from "../containers/AdvUnitContainer";
import { UserFormContainer } from "../containers/UserFormContainer";

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
