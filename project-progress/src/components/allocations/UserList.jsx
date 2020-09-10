import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import "../../index.css";
import User from "./User";

class UserList extends Component {
  state = {};

  render() {
    const { auth, users, allocationId, allocation } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    let allocated = users && users.some((user) => user.allocated === false);

    return (
      <div>
        <h6>
          {allocated ? (
            <p>Click users to add them in this group...</p>
          ) : (
            <p>All users in the system have been allocated...</p>
          )}
        </h6>
        <p>
          {users &&
            users.map((user) => {
              return (
                <User
                  user={user}
                  allocationId={allocationId}
                  key={user.id}
                  allocation={allocation}
                />
              );
            })}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const users = state.firestore.ordered.users;
  return {
    auth: state.firebase.auth,
    users: users,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(UserList);
