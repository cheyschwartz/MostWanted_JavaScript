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

