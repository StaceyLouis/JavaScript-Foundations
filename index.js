
let principal = 200000;
let years = 30;
let interestRate = 0.05;
let name = "Stacey";
let monthlyInterestRate = interestRate / 12;
let periods = years * 12;


let n1 = Math.pow((1 + monthlyInterestRate),periods);
let numerator = n1 * monthlyInterestRate;
let denominator = n1 - 1;
let monthlyRate = principal * (numerator/denominator);

console.log(monthlyRate);


function mortgageCalculator(name,monthlyRate){
    return name + ' , your monthly rate is ' + monthlyRate;
}

console.log(mortgageCalculator(name,monthlyRate)); 



   function mortgageCalculator(P,I,N,creditScore){
        let highInterest = monthlyRate * 1.05;
        let lowInterest  = monthlyRate * 0.95;
    
        if (creditScore > 740 ) {
            return I = lowInterest;
        } else if  (creditScore < 660) {
            return I = highInterest;
        } else {
            return monthlyRate;
        }
    }
    console.log(mortgageCalculator(200000, 0.05, 30,500));
    
    



          function variableInterestRate(P, I, N) {
            I -= 0.02;
            for( let i = 0; i < 10; i ++){
                let monthlyRate = Math.round(P * (((I/12) * Math.pow((1 + (I/12)), (N * 12))) / (Math.pow((1 + (I/12)), (N * 12)) - 1)) *100)/100

                console.log(name +", with an interest rate of " + I.toFixed(3) + " your monthly rate is " +  Math.round(monthlyRate));
                I += 0.005;
            };
        }

      console.log(variableInterestRate(200000, 0.04, 30));