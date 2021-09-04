class userDto{
    name;
    surname;
    email;
    country;
    birthdate;
    configId;
    constructor(params){
        this.name = params.name ? params.name : undefined;
        this.surname = params.surname ? params.surname : undefined;
        this.email = params.email ? params.email : undefined;
        this.country = params.country ? params.country : undefined;
        this.birthdate = params.birthDate ? params.birthDate : undefined;
        this.configId = params.configId ? params.configId : undefined;        
    }
}
exports.userDto= userDto;