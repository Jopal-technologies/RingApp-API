class userDto{
    name;
    surname;
    email;
    country;
    birthdate;
    configId;
    constructor(params){
        this.name = params.name;
        this.surname = params.surname;
        this.email = params.email;
        this.country = params.country;
        this.birthdate = params.birthDate;
        this.configId = params.configId;        
    }
}
exports.userDto= userDto;