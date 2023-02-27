const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  var start_day = new Date(date1);
  var end_day = new Date(date2);
  var rt_text;
  var year_text;
  var month_text;
  if(isNaN(end_day.getTime()) || isNaN(start_day.getTime()))
  {
      rt_text="Error: Invalid input provided.";      

  }
  else
  {

    var year_rt;
    var month_rt;

    if(end_day >= start_day)
    {
      year_rt = end_day.getFullYear() - start_day.getFullYear();
      month_rt = end_day.getMonth() - start_day.getMonth();


    }
    else{

      year_rt = start_day.getFullYear() - end_day.getFullYear();
      month_rt = start_day.getMonth() - end_day.getMonth();

    }

    
      month_text = month_rt;

      year_text = year_rt;

      if(month_rt < 0)
      {
        month_text = month_rt + 12;
        year_text = year_rt - 1;
      }

  
  // set print out.
    if(year_text != 0)
      rt_text = "Time elapsed: " + year_text + " years, " + month_text +" months";
    else
      rt_text = "Time elapsed: " + month_text +" months";
 
  }
  return rt_text;

};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, 'May 1, 1995'));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, '1975-8-11'));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, 'birthdate'));
// Error: Invalid input provided.
console.log(calculateTime('April 19, 1996', 'May 1, 1995'));

console.log(calculateTime('April 19, 1993', 'May 1, 1995'));