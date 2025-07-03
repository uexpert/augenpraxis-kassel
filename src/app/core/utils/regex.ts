const ClockTimeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
const ClockTimeRegexGlobal = /([01]?[0-9]|2[0-3]):([0-5][0-9])/g;
const EmptyStringRegex =  /^$/;
const DecimalNumberRegex = /^-?([0-9]+)(\,[0-9]*)?$/;
const DecimalNumberRegexGlobal = /-?([0-9]+)(\,[0-9]*)?/g;
const TwoDecimalNumberRegex = /^-?([0-9]+)(\,[0-9]?[0-9]?)?$/;
const TwoDecimalNumberRegexGlobal = /-?([0-9]+)(\,[0-9]?[0-9]?)?/g;
const NormalNumberRegex = /^[0-9]+$/;
const NormalNumberRegexGlobal = /[0-9]+/g;
const EmailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const EmailRegexGlobal = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/g;
const UrlRegex = /^((((ftp|https?):\/\/)|(www\.))?[\-\w@:%_\+.~#?&\/\/=]+\.[a-zA-Z]{2,6}([\-\w@:%_\+.~#?&\/\/=]*))$/;
const UrlRegexGlobal = /((((ftp|https?):\/\/)|(www\.))?[\-\w@:%_\+.~#?&\/\/=]+\.[a-zA-Z]{2,6}([\-\w@:%_\+.~#?&\/\/=]*))/g;
const IBAN = /^DE\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{2}$/;
const IBAN_Global = /DE\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{2}/g;
const CustomIBAN = /^DE\s\d{2}\s\d{8}\s\d{10}$/;
const CustomIBAN_Global = /DE\s\d{2}\s\d{8}\s\d{10}/g;
const CustomPasswordRegex = /^(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s]).*$/; // uppercase letters, lowercase letters, numbers and symbols (special characters)
const CustomPasswordRegex_Global = /(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s]).*/g; // uppercase letters, lowercase letters, numbers and symbols (special characters)

export {
    ClockTimeRegex, EmptyStringRegex, DecimalNumberRegex, NormalNumberRegex,
    EmailRegex, TwoDecimalNumberRegex, IBAN, CustomIBAN, EmailRegexGlobal,
    ClockTimeRegexGlobal, DecimalNumberRegexGlobal, TwoDecimalNumberRegexGlobal,
    NormalNumberRegexGlobal, IBAN_Global, CustomIBAN_Global, UrlRegex, UrlRegexGlobal,
    CustomPasswordRegex, CustomPasswordRegex_Global
};