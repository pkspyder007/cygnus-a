export const classes = (classNames) => {
    let classString = ''
    for (const check of classNames) {
        classString += check[0] ? ` ${check[1]}` : ` ${check[2]}`
    }
    return classString;
}