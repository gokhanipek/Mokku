import * as React from "react";
import { RouteProps, Route } from "react-router-dom";
import firebase from "firebase";

import { IUser } from "../../interface/user";
import { IStore } from "../../interface/mock";

import SideNav from "./SideNav";
import Nav from "./Nav";
import Mocks from "./Mock";

interface IProps extends RouteProps {
  user?: IUser;
  store: IStore;
}

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {});
};

const Dashboard = ({ user, store }: IProps) => {
  return (
    <div className="h-100">
      <Nav signOut={signOut} />
      <div className="flex h-100">
        <SideNav className="flex-shrink" />
        <div className="h-100 flex-grow">
          <Route
            path="/mocks"
            render={(props) => <Mocks {...props} store={store} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
