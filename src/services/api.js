import axios from 'axios';
import config from './../config/config'


const yearReportApi = axios.create({baseURL: config.data_example.baseUrl});

const getReportBar = async () => {
  return await yearReportApi({       
       method: 'get',
       url: '/anual-result'       
   })
     .then(response => {                  
        return response.data
     })
     .catch(err => {
       console.log('error: ' + err)
     })       
}

const getReportPie = async () => {
  return await yearReportApi({       
       method: 'get',
       url: '/anual-percentage'       
   })
     .then(response => {                  
        return response.data
     })
     .catch(err => {
       console.log('error: ' + err)
     })
}

const getReportLine = async () => {
  return await yearReportApi({       
       method: 'get',
       url: '/time-data'
   })
     .then(response => {                  
        return response.data
     })
     .catch(err => {
       console.log('error: ' + err)
     })
}

export {
    getReportBar,
    getReportPie,
    getReportLine
  }