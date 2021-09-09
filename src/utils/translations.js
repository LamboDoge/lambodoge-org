const languageMetadata = require("../data/translations.json")

const supportedLanguages = Object.keys(languageMetadata)

function toAbsoluteSlug(slug) {
    for (const lang of supportedLanguages) {
        if (slug.indexOf(`/${lang}`) === 0) {
            return slug.replace(`/${lang}`, '')
        }
    }
    return slug
}

module.exports.toAbsoluteSlug = toAbsoluteSlug
module.exports.languageMetadata = languageMetadata
module.exports.supportedLanguages = supportedLanguages
