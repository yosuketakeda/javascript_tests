/*
From this JSON example, get the keys such as name, age, gender for each people.
*/
var input = {"document":
    {"people":[
        {"name":["Harry Potter"],"age":["18"],"gender":["Male"]},
        {"name":["hermione granger"],"age":["18"],"gender":["Female"]},
    ]}
}

function all_keys_JSON_Object(input) {
    var keys = [];
    for(var i = 0;i<input.document.people.length;i++)
    {
        Object.keys(input.document.people[i]).forEach(function(key){
            if(keys.indexOf(key) == -1)
            {
                keys.push(key);
            }
        });
    }
    
    return keys;
}  

result = all_keys_JSON_Object(input); 

document.getElementById('all_keys_JSON_Object').append("Input : ", input, " --- keys : ", result);