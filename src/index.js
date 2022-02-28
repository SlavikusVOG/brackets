module.exports = function check(str, bracketsConfig) {
    const bracketsToCheck = [];
    const strArray = str.split("");
    let lostFlag;
    strArray.forEach((bracket) => {
        const found = bracketsConfig.find((config) => {
            if (
                bracketsToCheck.length > 0 
                && bracket === bracketsToCheck[bracketsToCheck.length-1][1]
            ) {
                bracketsToCheck.pop();
                return true;
            }
            else if (bracket === config[0]) {
                bracketsToCheck.push(config);
                return true;
            }
            return false;
        });
        if (!found) {
            lostFlag = true;
        }
    })
    return bracketsToCheck.length > 0 || lostFlag ? false : true;
}
