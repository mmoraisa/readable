const timestampToDayMonthYear = timestamp => {
    var date = new Date(timestamp);
    var day = date.getDate();
    if (day.toString().length === 1)
        day = '0' + day;
    var month = date.getMonth()+1;
    if (month.toString().length === 1)
        month = '0' + month;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export default timestampToDayMonthYear