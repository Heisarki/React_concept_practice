export default (count = 0, {type, payload}) => {
    switch (type) {
        case "UP":
            return count+payload;
        case "DOWN":
            return count;
        default:
            return count;
    }
}