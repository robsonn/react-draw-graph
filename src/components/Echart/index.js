import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import "./styles.css";

/**
 * Componente que desenha grafico com o chartjs
 * @param series - objeto echarts com as labels e os valores a serem visualizados
 * @param legend - objeto com a chave labels para legenda do grafico e a chave position para posicao
 * @param title - string com titulo do gráfico
 * @param type - string com o tipo de gráfico ex: bar
 */
export default class Echart extends Component {    

    render() {
        const title = this.props.title    
        const options = {
               legend: {
                    left: this.props.legend.position,
                    data: this.props.legend.labels
               },
               xAxis: {
                    type: 'category',
                    data: this.props.labels
               },
               yAxis: {
                    type: 'value'
               },
               series: this.props.series
          }
                         
        return (
          <div>
               <h3 className="echart-title">{title}</h3>
               <ReactEcharts className="echart-graph" option={options}/>
          </div>
        )
    }
}