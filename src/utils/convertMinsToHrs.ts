function convertMinsToHrs(mins: number) {
  let h:any = Math.floor(mins / 60);
  let m:any = mins % 60;
  h = h < 10 && `${h}h`;
  m = m < 10 ? `0${m}min` : `${m}min`;
  return `${h}${m}`;
}

export default convertMinsToHrs;