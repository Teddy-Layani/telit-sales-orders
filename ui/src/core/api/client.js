import axios from 'axios';

const client = axios.create({
    baseURL: 'gw/sap/opu/odata/SAP/ZSD_MAIN_SRV'
});



export { client };
