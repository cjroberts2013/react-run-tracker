import React, { Component } from 'react'
import './Running.css'
import Logs from "./Logs/Logs"
import Logform from "./Logform/Logform"
import { DB_CONFIG } from "./../../config/config"
import firebase from './firebase/app'



class Running extends Component {
    constructor(props) {
        super(props)
        this.addLog = this.addLog.bind(this)

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref().child('logs');

        // We are going to setup the React state of our component
        this.state = {
            logs: [
                // { id: 1, logType: 'Evening Run', logDate: '02/08/2020', logDistance: 8.3, logTime: 123, logPace: '8:30', logNotes: 'This was a super good run. I felt really happy about it!' },
                // { id: 2, logType: 'Morning Run', logDate: '02/10/2020', logDistance: 7.8, logTime: 111, logPace: '7:43', logNotes: 'I felt really happy about it! This was a super good run.' }
            ],
        }
    }

    componentWillMount() {
        const previousLogs = this.state.logs;
    }

    addLog(log) {
        const previousLogs = this.state.logs;
        previousLogs.push({ id: previousLogs.length + 1, logType: newLogType, logDate: newLogDate, logDistance: newLogDistance, logPace: newLogPace, logTime: newLogTime, logNotes: newLogNotes });
        this.setState({
            logs: previousLogs
        })

    }

    render() {
        return (
            <div className="logsWrapper running">
                <div className="logsHeader">
                    <h1>RUNNING LOG</h1>
                </div>
                <div className="logsBody">
                    {
                        this.state.logs.map((log) => {
                            return (
                                <Logs logType={log.logType} logDate={log.logDate} logDistance={log.logDistance} logTime={log.logTime} logPace={log.logPace}
                                    logNotes={log.logNotes} key={log.id} logId={log.id} />
                            )
                        })
                    }
                </div>
                <Logform addLog={this.addLog} />
            </div>
        )
    }
}


export default Running