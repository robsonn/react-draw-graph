import React, {Component} from 'react';
import {getReportLine} from '../../services/api';
import Echart from '../../components/Echart';
import "./styles.css";


export default class Page2 extends Component {

    state = {label: [], todayEchY: [],  yesterdayEchY: []}

    /**
     * Funcao que inicia ao montar componente e chama api para adicionar no state os dados para o gráfico
     */
    async componentDidMount() {        
        const dataLine = await getReportLine()  

        var todayEchX = []
        var todayEchY = []        
        var yesterdayEchY = []

        dataLine.today.forEach(item => {
          todayEchX.push(item.label)
          todayEchY.push(item.value)
        });

        dataLine.yesterday.forEach(item => {                                             
          yesterdayEchY.push(item.value)
        });
        
        this.setState({label: todayEchX,
                     todayEchY: todayEchY,                     
                     yesterdayEchY: yesterdayEchY})          
    }

    render() {                    
        const series = [
            { 
                 name: 'today',
                 data: this.state.todayEchY,
                 type: 'line'
            }, {
                 name: 'yesterday',
                 data: this.state.yesterdayEchY,
                 type: 'line'
            }
       ]   

        return (
            <div>
                <h1>Page 2</h1>
                <div className="page2-main">

                    <div className="page2-card-graph">
                        <Echart legend={{labels: ['today', 'yesterday'], position: 'right'}}
                                    labels={this.state.label} series={series} title='LINE CHART 2 DATA'/>
                    </div>        
                </div>
            </div>
        )
    }
}