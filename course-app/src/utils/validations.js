export  function IsRequiredCheck(value) {
  return value && value.trim().length > 0;
}

export  function IsValidImage(value){
    return( value && value.endsWith(".jpg") |  value.endsWith(".jpeg") |  value.endsWith(".png"));
}