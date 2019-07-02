// TODO: make this a rest call at start up to get all info


export const EQUIPLIST = 
[
    {
        id:1,
        name:'Well House 1',
        location:'to get from gis',
        equipment:[
            {   
                id:1,
                name:"motor",
                open:true,
                properties:[
                    {
                        name:"Horse Power",           
                        prop:"this"
                    },{
                        name:"Oil Type",           
                        prop:"this"
                    },{
                        name:"Serial Number",           
                        prop:"this"
                    },{
                        name:"Grease Type",           
                        prop:"this"
                    }
                ],
                services:[
                    {
                        id:"1",
                        type:"Oil Channge",
                        date:"09-01-05",
                        previousDate:"09-01-02",
                        person:"Brady",
                        notes:"send out oil"
                    },{
                        id:"2",
                        type:"boop",
                        date:"09-01-21",
                        previousDate:"09-01-22",
                        person:"who dis?",
                        notes:""
                    }
                ]   
            },
            {
                id:2,
                name:"Meter Flow",
                open:false,
                properties:[
                    {

                    }
                ],
                services:[
                    {

                    }
                ]
            }
        ],
        chlorinatorEquipment:[
            {   
                id:1,
                name:"motor",
                properties:[
                    {
                        name:"Horse Power",           
                        prop:"this"
                    },{
                        name:"Oil Type",           
                        prop:"this"
                    },{
                        name:"Serial Number",           
                        prop:"this"
                    },{
                        name:"Grease Type",           
                        prop:"this"
                    }
                ],
                services:[
                    {
                        id:"1",
                        type:"poop",
                        date:"09-01-02",
                        person:"who dat?"
                    },{
                        id:"2",
                        type:"boop",
                        date:"09-01-22",
                        person:"who dis?"
                    }
                ]   
            },
            {
                id:2,
                name:"Meter Flow",
                properties:[
                    {

                    }
                ],
                services:[
                    {

                    }
                ]
            }
        
        ],

    },
    {
        id:2,
        name:'Well House 2',
        location:'to get from gis',
        equipment:[
            {   
                id:1,
                motor:[
                    {           
                        horsePower:"",
                        oilType:"",
                        serial:"",
                        greaseType:"",
                        services:[
                            {
                                id:"",
                                type:"",
                                date:"",
                                person:""
                            }
                        ]   
                    },
                ]
            },
            {
                id:2,
                flowMeter:[
                    {

                    }
                ]
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
            id:"",
            type:"",
            date:"",
            person:"",
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