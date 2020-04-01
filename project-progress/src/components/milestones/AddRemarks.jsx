import React, { Component } from "react";
import { addRemark } from "../../store/actions/milestoneActions";
import { connect } from "react-redux";

class AddRemarks extends Component {
  state = {
    comment: "",
    milestoneId: this.props.milestoneId
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleAddRemark = milestoneId => {
    this.props.addRemark(this.state, milestoneId);
    document.getElementById("add-remark-form").reset();
  };

  render() {
    const { milestoneId } = this.props;
    return (
      <React.Fragment>
        <table className="white">
          <tbody>
            <tr>
              <td colSpan="2">
                <form id="add-remark-form">
                  <div className="input-field">
                    <label htmlFor="comment">Enter Remarks</label>
                    <input
                      type="text"
                      id="comment"
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </td>
              <td>
                <button
                  onClick={() => this.handleAddRemark(milestoneId)}
                  className="btn cyan darken-2 z-depth-0"
                >
                  <i className="material-icons">send</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRemark: (remark, milestoneId) => dispatch(addRemark(remark, milestoneId))
  };
};

export default connect(null, mapDispatchToProps)(AddRemarks);
