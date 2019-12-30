import React from 'react';
import { mount, shallow } from 'enzyme';
import Chart from './../components/Chart';
import Echart from './../components/Echart';

it('test Chart mount', () => {
     var type = 'pie'
     var title = 'PIE CHART'
     var pie = {labels: ['legend1', 'legend2', 'legeng3'],
            datasets: [
                {
                    data: ['1,2,3'],
                    backgroundColor: ["red", "blue", "white"],
                    barThickness: 35
                },
            ]
          }   
     const chartPie = mount(<Chart type={type} title={title} data={pie}/>)

     expect(chartPie.find('.chart-title').text()).toEqual(title)
     expect(chartPie.props().type).toEqual(type)     
});

it('test echart mount', () => {
     const legend = {labels: ['tomorrow', 'after-tomorrow'], position: 'right'}
     const title = 'TEST'
     const labels = ['1, 2, 3']
     const series = [
          { 
               name: 'tomorrow',
               data: [10, 9, 8],
               type: 'line'
          }, {
               name: 'after-tomorrow',
               data: [10, 5, 6],
               type: 'line'
          }
     ]        
     var eChart = shallow(<Echart legend={legend} title={title}
                                    labels={labels} series={series} />)

     expect(eChart.find('.echart-title').text()).toEqual(title)     
     
});
