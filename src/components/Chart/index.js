import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2'
import "./styles.css";


/**
 * Componente que desenha grafico com o chartjs
 * @param data - objeto chartjs com as labels e os valores a serem visualizados
 * @param title - string com titulo do gráfico
 * @param type - string com o tipo de gráfico ex: bar
 */
export default class Chart extends Component {    

    render() {            
        const data = this.props.data
        const title = this.props.title
        const type = this.props.type
        const barSize = {height: 70, width: 130}
                         
        return (
            <div>
                <h3 className="chart-title">{title}</h3>                
                
                {type.toLowerCase() === 'bar' ? (
                    <Bar data={data}                
                        legend = {{display: false}} 
                        height = {barSize.height}
                        width = {barSize.width}
                        options={{   
                            layout: {
                                padding: {
                                    left: 20,                         
                                    right: 20   
                                }
                            },                 
                            scales: {
                            xAxes: [{                        
                                gridLines: {                            
                                    display:false                            
                                }
                            }],
                            yAxes: [{                          
                                ticks: {
                                    beginAtZero: true
                                },                                          
                                gridLines: {                            
                                    display:false
                                }   
                            }]}, responsive:true, maintainAspectRatio: true}}
                        />
                ):null}

                {type.toLowerCase() === 'pie' ? (
                    <Pie data={data}/>
                ): null}

            </div>
        )
    }
}