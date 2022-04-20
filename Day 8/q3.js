
const findWeek = (day) => {
    const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    const weekend = ["saturday", "sunday"];
    if (weekday.includes(day.toLowerCase())) {
        return "weekday"
    }
    else if (weekend.includes(day.toLowerCase())) {
        return "Weekend";
    }
}

const f = findWeek("Sunday");
console.log(f);//weekend
