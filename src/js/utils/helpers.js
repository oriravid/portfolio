////////////// FORMATTING //////////////

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

    if (day[0] == 0) {
        day = day[1]
    }

    return `${short ? months[month].slice(0,3) : months[month]} ${day}, ${year}`;
};
