//input yyyy-mm-dd
//prettier-ignore
export const dateFormatter = (date, short) => {
    const months = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
    };

    const parts = date.split("-");
    var month = parts[1],
        day = parts[2],
        year = parts[0];
        
    let ordinal = "th"
    let ordinals = {
        st: ["01", "21", "31"],
        nd: ["02", "22"],
        rd: ["03", "23"],
    };
    Object.keys(ordinals).forEach((ordinalKey) => {
        if (ordinals[ordinalKey].includes(day)) {
            ordinal = ordinalKey
        }
    })

    if (day[0] === "0") {
        day = day[1];
    }

    return `
    ${short ? months[month].slice(0, 3) : months[month]} 
    ${day}${!short ? ordinal : ""}, 
    ${year}`;
};

// date comparison, input array of objects
// date: "YYYY-MM-DD"
export const dateSorter = (proj1, proj2) => {
    const date1 = proj1.date.split("-");
    const date2 = proj2.date.split("-");

    if (date1[0] > date2[0]) {
        return -1;
    } else if (date1[0] < date2[0]) {
        return 1;
    }

    if (date1[1] > date2[1]) {
        return -1;
    } else if (date1[1] < date2[1]) {
        return 1;
    }

    if (date1[2] > date2[2]) {
        return -1;
    } else if (date1[2] < date2[2]) {
        return 1;
    }

    return 0;
};
