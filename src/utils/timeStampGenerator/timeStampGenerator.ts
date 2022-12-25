// const MINUTE = 60;
// const HOUR = MINUTE * 60;
// const DAY = HOUR * 24;
// const WEEK = DAY * 7;
// const MONTH = DAY * 30;
// const YEAR = DAY * 365;

// export const getTimeStamp = (createdAt: string) =>{
//     let date = new Date(createdAt);
    
//     let secondsAgo = Math.round((Date.now() - date.getTime()) / 1000);

//     if(secondsAgo < MINUTE){
//         return secondsAgo + `second${secondsAgo !== 1 ? 's' : ''} ago`;
//     }

//     let divisor;
//     let unit = '';

//     if(secondsAgo < HOUR){
//         [ divisor, unit ] = [ MINUTE, 'minute'];
//     }
//     else if (secondsAgo < DAY){
//         [ divisor, unit ] = [ HOUR, 'hour'];
//     }
//     else if (secondsAgo < WEEK){
//         [ divisor, unit ] = [ DAY, 'day'];
//     }
//     else if (secondsAgo < MONTH){
//         [ divisor, unit ] = [ WEEK, 'week'];
//     }
//     else if (secondsAgo < YEAR){
//         [ divisor, unit ] = [ MONTH, 'month'];
//     }
//     else{
//         [ divisor, unit ] = [ YEAR, 'year'];
//     }

//     const count = Math.floor(secondsAgo / divisor);
    
//     return `${count} ${unit}${count > 1 ? 's' : ''} ago`; 
// }

export const getTimeStamp = (createdAt: string) =>{
    let date = new Date(createdAt).getTime();
    
    let value;
    const diff = (new Date().getTime() - date) / 1000;
    const minutes = Math.floor(diff / 60); 
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24); 
    const months = Math.floor(days / 30); 
    const years = Math.floor(months / 12); 
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto'});

    if(years > 0) {
        value = rtf.format(0 - years, "year");
    } else if (months > 0) {
        value = rtf.format(0 - months, "month");
    } else if (days > 0) {
        value = rtf.format(0 - days, "day");
    } else if (hours > 0) {
        value = rtf.format(0 - hours, "hour");
    } else if (minutes > 0) {
        value = rtf.format(0 - minutes, "minutes");
    } else {
        value = rtf.format(Math.floor(0 - diff), "second")
    }

    return value;
}