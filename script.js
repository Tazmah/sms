let firstName = document.getElementById("first_name");

let lastName = document.getElementById("last_name");

let email = document.getElementById("email");

let testOne = document.getElementById("test_1");

let testTwo = document.getElementById("test_2");

let toTal = document.getElementById("total");

let table = document.querySelector("#table");


let buttons = document.getElementById("button");


buttons.addEventListener("click", function () {

    test0 = parseInt(testOne.value);
    test1 = parseInt(testTwo.value);

    toTal = test0 + test1;

    console.log(toTal);

    let abc = {
        first: firstName.value,
        last: lastName.value,
        mail: email.value,
        test1: testOne.value,
        test2: testTwo.value,
        toYool: toTal
    }

    // console.log(abc);





    firstName.value = "";
    lastName.value = "";
    // console.log(last);
    email.value = "";
    testOne.value = "";
    testTwo.value = "";



    // const value = abc.first
    var row = document.createElement("tr");

    for (info in abc) {
        var daTa = document.createElement("td")
        // console.log(abc[info]);
        daTa.append(abc[info])
        row.append(daTa)
    }


    // console.log(value);
    if (
        abc.first == "" ||
        abc.last == "" ||
        abc.mail == "" ||
        abc.test1 == "" ||
        abc.test2 == ""
    ) {
        table.append()
    } else {
        table.append(row)

    }


    // console.log(table.append(row));

})