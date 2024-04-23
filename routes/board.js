const express = require('express')
const router = express.Router()

router.get('/basicInfo', async (req,res)=>{
    const result = {
        Hardware: [
          {
            name: 'Chassis',
            descr: 'Cisco 7206VXR, 6-slot chassis',
            pid: 'CISCO7206VXR',
            vid: '',
            sn: '4279256517'
          },
          {
            name: 'NPE400 0',
            descr: 'Cisco 7200VXR Network Processing Engine NPE-400',
            pid: 'NPE-400',
            vid: '',
            sn: '11111111'
          },
          {
            name: 'module 0',
            descr: 'I/O FastEthernet (TX-ISL)',
            pid: 'C7200-IO-FE-MII/RJ45=',
            vid: '',
            sn: '4294967295'
          },
          {
            name: 'module 1',
            descr: 'FastEthernet',
            pid: 'PA-FE-TX',
            vid: '',
            sn: '4294967295'
          },
          {
            name: 'module 2',
            descr: 'FastEthernet',
            pid: 'PA-FE-TX',
            vid: '',
            sn: '4294967295'
          },
          {
            name: 'Power Supply 1',
            descr: 'Cisco 7200 AC Power Supply',
            pid: 'PWR-7200-AC',
            vid: '',
            sn: ''
          },
          {
            name: 'Power Supply 2',
            descr: 'Cisco 7200 AC Power Supply',
            pid: 'PWR-7200-AC',
            vid: '',
            sn: ''
          }
        ],
        Interfaces: {
          'FastEthernet0/0': 'up',
          'FastEthernet1/0': 'administratively',
          'FastEthernet2/0': 'administratively'
        },
        Memory: { memory_usage: 14.16 }
      }

    res.json(result)
    console.log(result)
})


router.get('/basicConnectivity', async (req,res)=>{
    const result = {
        success_rate: 'Success rate is 100 percent (5/5), round-trip min/avg/max = 40/79/168 ms'
          }

    res.json(result)
    console.log(result)
})

module.exports = router