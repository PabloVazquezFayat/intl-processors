module.exports = (date)=> {

    var dateBias = Math.floor(new Date("Dec 31 1899 00:00:00 GMT") / 1000 / 60 / 60  / 24);
    var dateOfSailing = new Date((date + dateBias) * 1000 * 60 * 60 * 24).toString();
  
    var date = dateOfSailing.split(' ').filter((ele, i)=>{
        return i === 1 || i === 2 || i === 3; 
    });
  
    switch(date[0]){
      case 'Jan' :
        date[0] = '1';
      break;
      case 'Feb' :
        date[0] = '2';
      break; 
      case 'Mar' :
        date[0] = '3';
      break; 
      case 'Apr' :
        date[0] = '4';
      break; 
      case 'May' :
        date[0] = '5';
      break; 
      case 'Jun' :
        date[0] = '6';
      break; 
      case 'Jul' :
        date[0] = '7';
      break; 
      case 'Aug' :
        date[0] = '8';
      break; 
      case 'Sep' :
        date[0] = '9';
      break; 
      case 'Oct' :
        date[0] = '10';
      break; 
      case 'Nov' :
        date[0] = '11';
      break; 
      case 'Dec' :
        date[0] = '12';
      break; 
    }

    return `${parseInt(date[0])}/${parseInt(date[1])}/${parseInt(date[2])}`;
    
}