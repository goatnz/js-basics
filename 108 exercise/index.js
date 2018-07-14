const marks = [80 , 80 ,50 ] ;



console.log(calculateGrade(marks))

function calculateGrade(marks) {
    const average   =  calculateAverage(marks) ; 

      if (average < 60) return 'f' ; 
      if (average < 70) return 'd' ; 
      if (average < 80) return 'c' ; 
      if (average < 60) return 'b' ;
      return 'a' ;  
       
        
    
}


function calculateAverage(array) {
    let sum  =  0 ; 
    
    for (let value of array) 
        sum += value ; 
        return sum / marks.length ; 
  
  
    
      
  }