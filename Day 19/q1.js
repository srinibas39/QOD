const month31Days = (month) => {
    const month31Days= ["January", "March", "May", "August", "October", "December"];
    for (let i = 0; i < month31Days.length; i++) {
        if (month31Days[i].toLowerCase() === month.toLowerCase()) {
            return true
        }
    }
    return false
}

let m = month31Days("january");
console.log(m);