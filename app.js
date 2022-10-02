function app(people) {

    var searchType = promptFor("Do you know the name of the person you are looking for? Enter yes or no.", yesNo).toLowerCase();
    switch (searchType) {
        case 'yes':
            searchByName(people);
            break;
        case 'no':
            searchByTraits(people);
            break;
        default:
            app(people);
            break;
    }
}

function mainMenu(person, people) {

    if (!person) {
        alert("Could not find that individual.");
        return app(people);
    }

    var displayOption = prompt("We have found " + person.firstName + " " + person.lastName + " . Do you want to know their info, family or descendants? Type your selection or cancel.");

    if (displayOption === null) {
        app(people);
    }
    else {
        displayOption = displayOption.toLowerCase();

        switch (displayOption) {
            case "info":
                displayPerson(person, people);
                break;
            case "family":
                displayFamily(person, people);
                break;
            case "descendants":
                displayDescendants(person, people);
                break;
            case "restart":
                app(people);
                break;
            case "quit":
                return;
            default:
                return mainMenu(person, people);
        }
    }
}

function searchByTraits(people) {

    var listed = "";
    var filteredList;
    var filterCheck = people.length;

    filteredList = searchByAge(people);
    filteredList = searchByHeight(filteredList);
    filteredList = searchByWeight(filteredList);
    filteredList = searchByOccupation(filteredList);
    filteredList = searchByEyeColor(filteredList);

    if (filteredList.length === filterCheck) {
        alert("You said no to all filters, there is no one to display.");
    }
    else if (filteredList.length === 0) {
        alert("There is no one that meets your criteria.");
    }
    else {
        for (var i = 0; i < filteredList.length; i++) {
            listed += filteredList[i].firstName + " " + filteredList[i].lastName + " ";
        }
        alert(listed);
    }

    app(people);
}

function searchByHeight(people) {
    var heightSearch = promptFor("Do you want to search by height? Enter yes or no.", yesNo).toLowerCase();

    switch (heightSearch) {
        case "yes":
            var findHeight = lookUpHeight(people);
            return findHeight;
        case "no":
            return people;
        default:
            searchByHeight(people);
            break;
    }
}

function searchByWeight(people) {
    var weightSearch = promptFor("Do you want to search by weight? Enter yes or no.", yesNo).toLowerCase();

    switch (weightSearch) {
        case "yes":
            var findWeight = lookUpWeight(people);
            return findWeight;
        case "no":
            return people;
        default:
            searchByWeight(people);
            break;
    }
}

function searchByOccupation(people) {
    var occupationSearch = promptFor("Do you want to search by occupation? Enter yes or no.", yesNo).toLowerCase();

    switch (occupationSearch) {
        case "yes":
            var findOccupation = lookUpOccupation(people);
            return findOccupation;
        case "no":
            return people;
        default:
            searchByOccupation(people);
            break;
    }
}

function searchByEyeColor(people) {
    var eyeColorSearch = promptFor("Do you want to search by eye color? Enter yes or no.", yesNo).toLowerCase();

    switch (eyeColorSearch) {
        case "yes":
            var findEyeColor = lookUpEyeColor(people);
            return findEyeColor;
        case "no":
            return people;
        default:
            searchByEyeColor(people);
            break;
    }
}

function lookUpOccupation(people) {

    var occupation = promptFor("What is the person's occupation?", chars);
    var occupationFilteredArray = people.filter(function (element) {

        if (element.occupation === occupation) {
            return true;
        }
    });

    return occupationFilteredArray;
}

function lookUpEyeColor(people) {

    var eyeColor = promptFor("What is the person's eye color?", chars);
    var eyeColorFilteredArray = people.filter(function (element) {

        if (element.eyeColor === eyeColor) {
            return true;
        }
    });

    return eyeColorFilteredArray;
}

function lookUpHeight(people) {

    var height = parseInt(promptFor("What is the person's height?", chars));
    var heightFilteredArray = people.filter(function (element) {

        if (element.height === height) {
            return true;
        }
    });

    return heightFilteredArray;
}

function lookUpWeight(people) {

    var weight = parseInt(promptFor("What is the person's weight?", chars));
    var weightFilteredArray = people.filter(function (element) {

        if (element.weight === weight) {
            return true;
        }
    });

    return weightFilteredArray;
}

function searchByAge(people) {

    var ageSearch = promptFor("Do you want to search by age? Enter yes or no.", yesNo).toLowerCase();

    switch (ageSearch) {
        case "yes":
            changeDobToAge(people);
            var findAge = lookUpAge(people);
            return findAge;
        case "no":
            return people;
        default:
            searchByAge(people);
            break;
    }
}

function changeDobToAge(people) {

    var peopleAge = people.map(function (element) {
        var dateOfBirth = new Date(element.dob);
        var currentDate = new Date();
        var result = currentDate - dateOfBirth;
        var age = Math.floor(result / changeDateValueToAge(result));
        return element.age = age;
    });
}

function changeDateValueToAge(dateValue) {
    //dateConversionValue converts the total date in millliseconds to years
    var dateConversionValue = 1000 * 60 * 60 * 24 * 365;
    return dateValue / dateConversionValue;
}

function lookUpAge(people) {

    var age = parseInt(promptFor("What is the person's age?", chars));
    var ageFilteredArray = people.filter(function (element) {
        if (element.age === age) {
            return true;
        }
    });
    return ageFilteredArray;
}

