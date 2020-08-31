function FormatDate(date: string) {
  var year  = date.split("-")[0];
  var month  = date.split("-")[1];
  var day  = date.split("-")[2];

  return `${day}/${month}/${year}`;  
}

export default FormatDate;