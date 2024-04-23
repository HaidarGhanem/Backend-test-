const express = require ('express')
const router = express.Router()

router.get('/connectivity', async (req, res) => {
    const result =  {
        success_rate: 'Success rate is 100 percent (5/5), round-trip min/avg/max = 40/79/168 ms'
          }

    res.json(result)
    console.log(result)
})


router.get('/checkconfig', async (req,res)=>{
    const result = {
        'success' : ' all configuration are correct in device : 192.168.192.131'
    }
    const result2 =  {
        'error' : ' there was an error in device : 192.168.192.131',
        'suggestion' : 'please review and correct'
    }

    res.json(result)
    console.log(result)  
})


router.get('/interfaces', async (req,res)=>{
    const result = {
        'FastEthernet0/0': 'up',
        'FastEthernet1/0': 'administratively',
        'FastEthernet2/0': 'administratively'
    }

    res.json(result)
    console.log(result)
})


router.get('/interfaceStatus', async (req, res) => {
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

module.exports = router