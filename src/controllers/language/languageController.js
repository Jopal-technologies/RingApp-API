const { Language } = require('../../models/langauge/language');


const languageController = {
    getAllLanguages: async() => await Language.findAll(),
    getLanguageById: async id => await Language.findByPk(id),
    postLanguage: async(lang) => {
        const a = Language.build({
            Description: lang.description,
        })
        return a.save();
    },
    putLanguage: (lang, id) =>{
        return Language.update(
            {
                Description: lang.description,
            },
            {where: { id: id }}
          );
    },
    deleteLanguage: async id => await Language.destroy({where: {id:id}}),
};
exports.languageController = languageController;
