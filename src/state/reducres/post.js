export default (post = [], {type, payload}) => {
    switch (type) {
        case "ADD_POST":
            return [...post, payload];
        default:
            return post;
    }
}