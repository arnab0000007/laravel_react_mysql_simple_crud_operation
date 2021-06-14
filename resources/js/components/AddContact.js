import React, { Component } from "react";
import axios from "axios";
class AddContacts extends Component {
    state = {
        fullName: "",
        email: "",
        phone: "",
    };
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    submitHandler = async (e) => {
        e.preventDefault();
        const res = await axios.post("/contact", this.state);
        this.setState({
            fullName: "",
            email: "",
            phone: "",
        });
        if (res.data.status === 200) {
            this.props.history.push("/");
        }
        // console.log(res);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            value={this.state.fullname}
                            onChange={this.handleInput}
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleInput}
                            placeholder="Enter Your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handleInput}
                            placeholder="Enter Your phone Number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn btn-success"
                            value="Add Contact"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContacts;
