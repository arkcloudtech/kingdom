import React, { Component } from 'react';
import KingsGuardService from "../services/kings-guard.service";

export default class AddKingsGuard extends Component {
    constructor(props) {
        super(props);
        this.onCreateGuard = this.onCreateGuard.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onActivate = this.onActivate.bind(this);
        this.onDeactivate = thids.onDeactivate.bind(this);
        this.alertGuard = this.alertGuard.bind(this);

        this.state = {
            id: null,
            title: "",
            activated: false,
            command: { trigger: 'default', action: () => { return {actionId: -1, message: 'a confused guard runs away by default' }}},
            
            submitted: false,
        }
    }

    onCreateGuard() {
        var data = {
            title: this.state.title,
            command: this.state.command
        };

        KingsGuardService.createGuard(data)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    activated: res.data.activated,
                    command: res.data.command,

                    submitted: true,
                });
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onActivate() {
        KingsGuardService.activateGuard(id);
    }

    onDeactivate(id) {
        KingsGuardService.deactivateGuard(id);
    }

    render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newTutorial}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    name="title"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>
    
                <button onClick={this.saveTutorial} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        );
      }
}