export default function objectsArrayToLookupObj(objectsArray, keyName) {
    return objectsArray.reduce((lookup, obj) => {
        lookup[obj[keyName]] = { ...obj };
        return lookup;
    }, {});
}
