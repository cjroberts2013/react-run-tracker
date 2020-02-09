import React, { Component } from "react"
import "./Logform.css"

class Logform extends Component {
    constructor(props) {
        super(props)
        this.handleAddRun = this.handleAddRun.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            addRun: false,
            newLogType: '',
            newLogDate: '',
            newLogDistance: '',
            newlogPace: '',
            newLogTime: '',
            newLogNotes: ''
        }
    }

    handleAddRun = () => {
        this.setState({ addRun: true })
    }

    handleUserInput(e) {

    }


    // writeLog(

    // )

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            addRun: false,
            newLogType: '',
            newLogDate: '',
            newLogDistance: '',
            newlogPace: '',
            newLogTime: '',
            newLogNotes: ''
        })

    }

    render() {
        const addRun = this.state.addRun;
        let logForm;

        if (addRun) {
            logForm = (
                <div>
                    <div className='formHeading'>
                        <h1>NEW RUN</h1>
                    </div>
                    <div className="addRunForm">
                        <form className="form">
                            <div className="form-group">
                                <label htmlFor="runType">Type of Run</label>
                                <input type="text" name="runType" className="form-control" placeholder="Morning Run" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="runDate">Date</label>
                                <input type="date" name="runDate" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="runDistance">Distance</label>
                                <input type="number" name="runDistance" className="form-control" placeholder='Distance in Miles' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="runPace">Pace</label>
                                <input type="text" name="runPace" className="form-control" placeholder='Minutes/Mile' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="runTime">Time</label>
                                <input type="text" name="runTime" className="form-control" placeholder="Overall Time" />
                            </div>



                            <div className="form-group">
                                <label htmlFor="runNote">Notes</label>
                                <textarea type="string" name="runNotes" className="form-control" rows="5"></textarea>
                            </div>

                        </form>

                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="form-btn">
                        <h1>SUBMIT RUN</h1>
                    </button>
                </div>

            )

        } else {
            logForm = <button className='form-btn' onClick={this.handleAddRun}><h1>ADD NEW RUN</h1></button>
        }



        return (
            <div>
                {logForm}
            </div>
        )
    }
}



export default Logform