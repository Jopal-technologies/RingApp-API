class languageDto{
    description;
    constructor(params){
        this.description = params.description ? params.description : undefined;    
    }
}
exports.languageDto= languageDto;