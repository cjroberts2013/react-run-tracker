import React, { Component } from 'react'
import PropTypes from "prop-types";
import './Logs.css'



class Logs extends Component {
    constructor(props) {
        super(props)
        this.logId = props.logId;
        this.logDate = props.logDate;
        this.logTime = props.logTime;
        this.logType = props.logType;
        this.logPace = props.logPace;
        this.logDistance = props.logDistance;
        this.logNotes = props.logNotes;


    }
    render(props) {
        return (
            <div className="">
                <div className="runLog__card">
                    <div className="runLog__left">
                        <div className="run__info">
                            <div className="type__run">{this.logType}</div>
                            <div className="date__run">{this.logDate}</div>
                            <br />
                        </div>

                        <div className="runLog__left-stats">
                            <div className="dist__info">
                                <div className="card__dist run__stats">
                                    <p>Distance: </p>
                                    <p><span className="log__dist">{this.logDistance}mi</span></p>

                                </div>
                            </div>

                            <div className="pace__info">
                                <div className="card__pace run__stats">
                                    <p>Pace: </p>
                                    <p><span className="log__pace">{this.logPace}/mi</span></p>
                                </div>
                            </div>

                            <div className="time__info">
                                <div className="card__time run__stats">
                                    <p>Time: </p>
                                    <p><span className="log__time">{this.logTime}mins</span></p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="runLog__right">
                        <div className="card__notes">Notes</div>
                        <div className="runLog__comments">{this.logNotes}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Logs.propTypes = {
    logDate: PropTypes.string,
    logNotes: PropTypes.string,
    logTime: PropTypes.number,
    logPace: PropTypes.string,
    logDistance: PropTypes.number,
    logType: PropTypes.string
}

export default Logs