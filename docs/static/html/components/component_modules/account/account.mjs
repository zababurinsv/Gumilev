import conf from '/static/html/components/component_modules/storage/module/config/config.mjs'
export default  (obj, func, ...args)=>{
    return new Promise( function (resolve, reject) {
            let out = (obj) => {
                console.log('~~~ out  ~~~')
                resolve(obj)
            }
            let err = (error) => {
                console.log('~~~ err  ~~~', error)
                reject(error)
            }
        if(func === undefined) {
                console.warn('account not defined waves-provider')
            resolve(obj)
        }else {
            switch (func) {
                case 'get':
                    (async (obj, props,data) => {
                        try {
                            switch (obj[props]) {
                                case 'state':
                                    await (async (obj, props,data) => {
                                        try {
                                            console.assert(false, obj)
                                            let dappaddress = conf['account']['dappaddress'];
                                            let baseUri = conf['account']['testnodes'];
                                            let accountbalance = await  window['wt']['nodeInteraction']['balanceDetails'](dappaddress, baseUri)
                                            accountbalance = accountbalance['regular'] / 100000000
                                            out(obj)
                                        } catch (e) { err(e) }
                                    })(obj, args[0], args[1], args[2], args[3])
                                    break
                                default:
                                    err(`new type [(${func})${obj[props]}]`)
                                    break
                            }
                        } catch (e) { err(e) }
                    })(obj, args[0], args[1], args[2], args[3])
                    break
                default:
                    err(`new function ${func}`)
                    break
            }
        }

    })
}
