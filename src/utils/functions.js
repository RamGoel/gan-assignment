export const objectFilter = (obj, predicate) => {
    var newObj = {}

    Object.keys(obj).map(item => {
        if (predicate(obj[item])) {
            newObj[item] = obj[item]
        }
        return 1;
    })

    return newObj

}
