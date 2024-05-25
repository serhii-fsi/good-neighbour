export default function getRoute({ path, params }, ...args) {
    return params.reduce((result, param, index) => result.replace(param, args[index]), path);
}
