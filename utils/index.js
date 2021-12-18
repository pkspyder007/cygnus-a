const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const sortByDate = (a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    if (!dateA || !dateB) return 0;
    console.log(a, b)
    return dateA - dateB;
}
export const formatDateForPostHeader = (dateStr) => {
    let date = new Date(dateStr);
    const day = DAYS[date.getDay()];
    const month = MONTHS[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    let formattedDate = `${day}, ${month} ${dayOfMonth}, ${year}`;

    return formattedDate;
}