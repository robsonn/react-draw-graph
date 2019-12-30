import React, {Component} from 'react';
import {getReportBar,getReportPie} from '../../services/api';
import Chart from '../../components/Chart';
import "./styles.css";



export default class Page1 extends Component {

    state = {labelPie: [], valuePie: [], labelBar:[], valueBar:[]}

    /**
     * Funcao que inicia ao montar componente e chama api para adicionar no state os dados para o gráfico
     */
    async componentDidMount() {        
        const dataBar = await getReportBar()  
        const dataPie = await getReportPie() 

        var labelBar = []
        var valueBar = []
        
        var labelPie = []
        var valuePie = []

        if(dataBar !== undefined && dataPie !== undefined) {
            dataBar.forEach(item => {
                labelBar.push(item.label.toString().substring(0, 3))
                valueBar.push(item.value)
            });
    
            dataPie.forEach(item => {            
                labelPie.push(item.label)                     
                valuePie.push(item.value)
            });
            
            this.setState({labelPie: labelPie, valuePie: valuePie, labelBar: labelBar, valueBar:valueBar})          
        }

        
    }

    /** 
    * funcao que retorna uma string rgb com numeros randomicos focados no azul
    * @return string - rgb css
    */
    getRGBColorString = () => {
        const r = parseInt(Math.random() * (20 - 10) + 10)
        const g = parseInt(Math.random() * (40 - 10) + 10) 
        const b = parseInt(Math.random() * (255 - 70) + 70)            

        return `rgb(${r}, ${g}, ${b})`
    }

    render() {                    
        const barsize = {height: 70, width: 130}
        const bar = {            
            labels: this.state.labelBar,
                datasets: [ {
                    data: this.state.valueBar,
                    backgroundColor: this.getRGBColorString(),
                    barThickness: 35
                }
            ],            
        }        
    
        const pie = {
            labels: this.state.labelPie,
            datasets: [
                {
                    data: this.state.valuePie,
                    backgroundColor: [this.getRGBColorString(), this.getRGBColorString(), this.getRGBColorString()],
                    barThickness: 35
                },
            ]
        }
        return (
            <div>
               <h1>Page 1</h1>
               <div className="page1-main">                

                    <div className="page1-card-graph">
                         <Chart type='bar' title='BARS CHART' data={bar}                
                         legend = {{display: false}} 
                         height = {barsize.height}
                         width = {barsize.width}                
                         />
                    </div>

                    <div className="page1-card-graph">
                         <Chart type='pie' title='PIE CHART' data={pie}/>
                    </div>
               </div>
            </div>
        )
    }
}