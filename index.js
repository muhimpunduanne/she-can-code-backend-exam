// Question 1
// a. Write a function countMembershipLevels(members) that takes an array of 
// member objects and returns an object showing the count of each membership level. The function 
// should dynamically count all membership levels, including any new levels that may be added. 
// Example output: { gold: 3, silver: 2, bronze: 4, platinum: 1 }. 

const members = {
    name: "anne", levels: "gold",
    name: "bob", levels: "silver",
    name: "ineza", levels: "bronze",
    name: "muhimpundu", levels: "platinum",

}
function countMembershipLevels(members) {
    let levelCount = { gold: onabort, silver: 0, bronze: 0, platinum: 0 }
    for (let member in members) {
        if (member.levels === "gold") {
            levelCount.gold++;
        } else if (member.levels === "silver") {
            levelCount.silver++;
        } else if (member.levels === "bronze") {
            levelCount.bronze++;
        } else if(member.levels==="platinum") {
            levelCount.platinum++;
        }
    }
    return levelCount;
}
console.log(countMembershipLevels(members));
// b. Write a function getGoldMembers(members) that returns an array of names of all members with 
// the membership level "gold". If there are no gold members, return "No gold members found". 
// Use the filter method.
function getGoldMembers(members) {
    return members.filter(member => member.levels === "gold").map(gold => gold.name);
};
console.log(getGoldMembers(members));
// c. Modify the getGoldMembers function to return "No gold members found" if there are no gold 
// members, even when the members array is empty or contains invalid data.
function getGoldMembers(members){
    const data = members.filter(member => member.levels === "gold").map(gold => gold.name);
    if(data.length===0){
        return "No gold members found" 
    }
}
console.log(getGoldMembers(members));
// d. Write a function generateWelcomeMessages(members) that returns an array of messages like 
// "Welcome, [name]! You are a [membership level] member." 
// Use the map method. 
function generateWelcomeMessages(members) {
    return members.map(member =>`Welcome, ${member.name}You are a${member.levels}`);
}
// e. Explain: Why is map often preferred over traditional loops for transforming data in arrays? Discuss 
// performance and readability.
  the reason is that map simplify entire code into few codes while traditional loops write more code and sometime gives erro;




// QUESTION 2: Recursion and Algorithmic Thinking 

// a. Write a recursive function sumDigits(n) that takes a number and returns the 
// sum of its digits. Example: sumDigits(123) → 6.
const n=[1,2,3,]
function sumDigits(n){
    returnsumDigits(n[0].slice(1))
}
console.log(sumDigits(n));
// b. Write a recursive function power(base, exponent) that calculates base^exponent. Example: 
// power(2, 3) → 8. 

function power(base, exponent){
    const number=base;
}

// d. Write a recursive function reverseWords(sentence) that reverses the order of words in a 
// string. Example: "Hello world" → "world Hello".
function reverseWords(sentence){
    if(sentence.length === "" ){
        return "";
    }else{
        return reverseWords(sentence.subsentence+sentence[0]) 
    }
  
}
console.log(reverseWords(sentence));

// d. Explain: When is recursion less efficient than iteration? Provide an example where iteration would 
// be a better choice (such as in cases with large datasets or deep recursion). 
the reason is that recursion function need more memory when we running our code but iteration for example for loop take less memory when we run our code
// e. Convert the sumDigits(n) function to an iterative version. Compare the performance of both the 
// recursive and iterative approaches when handling large numbers
function sumDigits(n){
    let sum=0;
    for(let number of n){
        sum+=number;
    }
    return sum;
}
console.log(sumDigits(n));



    // QUESTION 3: Banking Transaction System 
     
    // a. Write a function calculateBalance(transactions, accountHolder) that 
    // returns the current balance for a user. If the user has no transactions, return "No transactions found".    
function calculateBalance(transactions, accountHolder){
   let  length = transactions ;
    if(length ===0){
    return "No transactions found"
    }
}
console.log(CalculatingBalance(transactions, accountHolder));
// b. Write a function largeTransactions(transactions, minAmount) that returns transactions 
// above minAmount. 
function largeTransactions(transactions, minAmount){
  let Transaction;
    return largeTransactions.filter(Transaction=>transations>minAmount);
}
console.log(largeTransactions(transactions, minAmount));

// c.. Write a function sortTransactions(transactions) that sorts transactions from highest to 
// lowest amount.  

function sortTransactions(transactions){
    return transactions.sort((a,b)=>a.transactions-b.transactions);
}
console.log(sortTransactions);

// d. Write a function generateTransactionHistory(transactions, accountHolder) that 
// returns messages like:  
// "Alice deposited $500" 
// "Bob withdrew $200"
function generateTransactionHistory(transactions, accountHolder){
    return generateTransactionHistory.filter(transactions.name)
};
console.log(GeneratingTransactionHistory(transactions, accountHolder))
// e. Bonus: Modify calculateBalance to handle multiple users and return a balance for each user, 
// instead of just one account holder.

function calculateBalance(transactions, accountHolder){
    for(let user of users){
       if(user.length===0){
        return accountHolder++;
       } else
    }
}