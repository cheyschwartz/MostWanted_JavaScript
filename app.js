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

