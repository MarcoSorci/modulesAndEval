function startingUppercase(string) {
    return string[0].toUpperCase() + string.substring(1)
}

function splitCamelCase(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        const elem = string[i];
        if (elem === elem.toUpperCase()) {
            newString += (" " + elem)
        } else {
            newString += elem
        }

    } return newString
}

module.exports = {startingUppercase, splitCamelCase}

