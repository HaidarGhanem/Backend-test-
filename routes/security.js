const express = require ('express')
const router = express.Router()

router.get('/access', async (req,res)=>{
    const result = {
        'message' : 'ACL applied successfully on router : 192.168.192.131',
        'action_summary' : {
                            'permit' : 'permitted_ips : 90.0.0.1 ' ,
                            'deny' : 'denied_ips : 80.0.0.1 '
                           }
    }

    res.json(result)
    console.log(result)
})


router.get('/configaudit', async (req,res)=>{
    const result =  { device_ip: '192.168.192.131', diff_percentage: 50 }

    res.json(result)
    console.log(result)
})


router.get('/applysecurity', async (req,res)=>{
    const result = {
        'ip http server': 'Successfully configured',
        'ip http secure-server': 'Successfully configured',
        'ip finger': 'Successfully configured',
        'service finger': 'Successfully configured'
        }

    res.json(result)
    console.log(result)
})

module.exports = router