const express = require('express')
const router = express.Router()

const Devices = [
    { id : 1, name : "R1"},
    { id : 2, name : "R2"},
    { id : 3, name : "R3"},
    { id : 4, name : "SW1"},
    { id : 5, name : "Sw2"}
]

const Router = [
    { id : 1, name : "R1" , ip : "192.168.192.131" , username : "admin" , password : "admin"},
    { id : 2, name : "R2" , ip : "192.168.1.2" , username : "admin" , password : "admin"},
    { id : 3, name : "R3" , ip : "192.168.2.3" , username : "admin" , password : "admin" },
]

const Interfaces = {
    1: [
        { id : 1, name : "FastEthernet0/0" , ip : "192.168.192.131" },
        { id : 2, name : "FastEthernet1/0" , ip : "192.168.1.1"},
        { id : 3, name : "FastEthernet2/0" , ip : "192.168.2.1"},
    ],
    2: [
        { id : 1, name : "FastEthernet0/0" , ip : "192.168.1.2" },
        { id : 2, name : "FastEthernet1/0" , ip : "10.0.0.254"}
    ],
    3: [
        { id : 1, name : "FastEthernet0/0" , ip : "192.168.2.3" },
        { id : 2, name : "FastEthernet1/0" , ip : "20.0.0.254"}
    ]
}

router.get('/devices' , (req,res)=>{
    res.json(Devices)
    
})

router.get('/routers' , (req,res)=>{
    res.json(Router)
})

router.get('/interfaces' , (req,res)=>{
    res.json(Interfaces)
    console.log(Interfaces)
})

module.exports = router