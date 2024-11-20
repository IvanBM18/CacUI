
export function formatDate(dateInString){
    const date = new Date(dateInString);

    if(isNaN(date)){
        return ""
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2,'0');
    const day = String(date.getDay()).padStart(2,'0');
    const hour = String(date.getHours()).padStart(2,'0');
    const minute = String(date.getMinutes()).padStart(2,'0');
    const second = String(date.getSeconds()).padStart(2,'0');
    return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
}