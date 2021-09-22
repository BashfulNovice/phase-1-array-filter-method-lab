// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
// const functionNames = ['findMatching', 'fuzzyMatch', 'matchName'];
// console.log(drivers);
// console.log(functionNames);



function findMatching (array1, string1){
    
    let result1 = array1.filter(function (element){
        return element.toLowerCase() === string1.toLowerCase();
    });
return result1;
};

function fuzzyMatch (array2, string2){
    let len = string2.length;
    let result2 = array2.filter(function(element){
        return element.slice(0, len).toLowerCase() === string2.toLowerCase();
    });
return result2;
};

function matchName (array3, string3){
    let result3 = array3.filter(function(element){
        return element.name.toLowerCase() === string3.toLowerCase();
    });
return result3;
};