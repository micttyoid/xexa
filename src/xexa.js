// flat an object of digs(useState) into an get-valued object
// note: only depth 1
export const destate = (odigs) => {
    const flat = new Object()
    Object.entries(odigs).map(([k, v]) => {
        flat[k] = v.get
    })
    return flat
}

// destructure into get/set
export const digs = (us, others) => {
    const obj = {}
    us.forEach((s, i) => {
        if (i == 0) {
            obj.get = s
        } else {
            obj.set = s
        }
    })

    Object.assign(obj, others)

    return obj
}

export const each = (a, cb) => {
    switch (true) {
        case Number.isInteger(a) && a > 0:
            for (let i = 0; i < a; i++) {
                cb(i)
            }
            break
        case a.length != undefined && a.length > 0:
            for (let i = 0; i < a.length; i++) {
                cb(a[i], i)
            }
            break
        default:
            void 0
    }
}
