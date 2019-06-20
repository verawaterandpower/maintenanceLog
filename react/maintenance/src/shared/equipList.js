// TODO: make this a rest call at start up to get all info


export const EQUIPLIST = 
[
    {
        id:1,
        name:'Well House 1',
        location:'to get from gis',
        equipment:[
            {
                
            }
        
        

        ],
        chlorinatorService:[

        ],

    }
];

export const WellEquipment = [
    {
    motor:[{           
        horsePower:"",
        oilType:"",
        serial:"",
        greaseType:"",
        services:[{

        }]
    }
    ],
    pump:'???',
    pumpControlValve:'???',
    pumpDischargeValve:'???',
    highPSI:'???',
    flowMeter:'???',
    airVacValve:'???',
    preLubeValve:'???',
    coolers:'???',
    psiTransducer:'???',
    pipingValves:'???'
    }
];

export const ChlorEquipment = [
    {
        cl2Pump:'???',
        cl2Motor:'???',
        pipingValves:'???',
        pumpSielondid:'???',
        flowMeter:'???',
        psiGages:'???',
        checkValves:'???',
        tankFloat:'???',
        cl2DepositFilter:'???',
        fanExhaust:'???',
        heaterThermostat:'???'
    }
]