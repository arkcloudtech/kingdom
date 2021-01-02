import React, { Component } from 'react';
import CitizenService from "../services/citizen.service";

export default class MainGatePassage extends Component {
    constructor(props) {
        super(props);
        this.grantCitizenship = this.grantCitizenship.bind(this);
        this.requestEntry = this.requestEntry.bind(this);
        this.onCitizenTitleChange = this.onCitizenTitleChange.bind(this);
        this.onCitizenSecretChange = this.onCitizenSecretChange.bind(this);

        this.state = {
            id: null,
            citizenInfo: {
                title: null,
                secret: null,
            },

            entered: false,
            location: {},
        }
    }

    requestEntry() {
        var citizenInfo = this.state.citizenInfo;

        CitizenService.grantCitizenship(citizenInfo)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    entered: res.data.entered,
                    location: res.data.location,
                });
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    grantCitizenship(){
        var citizenInfo = this.state.citizenInfo;

        CitizenService.enterCitizen(citizenInfo)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    entered: res.data.entered,
                    location: res.data.location,
                });
                console.log(res.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    onCitizenTitleChange(e) {
        this.setState({
          ...this.state,
            citizenInfo: {
              ...this.state.citizenInfo,
                title: e.target.value,
            },
            
        });
    }

    onCitizenSecretChange(e) {
        this.setState({
          ...this.state,
            citizenInfo: {
              ...this.state.citizenInfo,
                secret: e.target.value,
            },
        });
    }

    render() {
        return (
          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>The kingdom has a new citizen!</h4>
                <h2>Welcome{this.citizenInfo.title}</h2>
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
                    value={this.state.citizenInfo.title}
                    onChange={this.onCitizenTitleChange}
                    name="title"
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="description">Codeword</label>
                  <input
                    type="text"
                    className="form-control"
                    id="secret"
                    required
                    value={this.state.citizenInfo.secret}
                    onChange={this.onCitizenSecretChange}
                    name="secret"
                  />
                </div>
                <button onClick={this.grantCitizenship} className="btn btn-info">
                  Become a Citizen
                </button>
                <button onClick={this.requestEntry} className="btn btn-success">
                  Request Entry
                </button>
              </div>
            )}
          </div>
        );
      }
}