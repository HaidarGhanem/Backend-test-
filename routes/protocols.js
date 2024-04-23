const express = require('express')
const router = express.Router()

router.get('/interfaces', async (req, res) => {

    const result = {
        'FastEthernet0/0': 'up',
        'FastEthernet1/0': 'administratively',
        'FastEthernet2/0': 'administratively'
    }

    res.json(result)
    console.log(result)
})


router.get('/interfacesStatus', async (req, res) => {
    const result = {
        message: 'Interface FastEthernet2/0 has been shut down successfully.'
    }

    res.json(result)
    console.log(result)
})


router.get('/dhcp' , async (req,res)=>{
    const result = {
        message: 'DHCP configuration applied successfully on 192.168.192.131'
    }

    res.json(result)
    console.log(result)
})


router.get('/rip' , async (req,res)=>{
    const result = { message: 'RIP configuration applied successfully.' }

    res.json(result)
    console.log(result)
})



router.get('/ripdis' , async (req,res)=>{
    const result = { message: 'RIP configuration disabled successfully.' }

    res.json(result)
    console.log(result)
})


router.get('/EIGRP' , async (req,res)=>{
    const result = { message: 'EIGRP configuration applied successfully.' }

    res.json(result)
    console.log(result)

})


router.get('/eigrpdis' , async (req,res)=>{
    const result = { message: 'EIGRP configuration disabled successfully.' }

    res.json(result)
    console.log(result)
})


router.get('/ospf' , async (req,res)=>{
    const result = { message: 'OSPF configuration applied successfully.' }

    res.json(result)
    console.log(result)
})

router.get('/ospfdis' , async (req,res)=>{
    const result =  { message: 'OSPF configuration disabled successfully.' }

    res.json(result)
    console.log(result)
})

module.exports = router