import REGEX from './regex.js';

export default class Validation {

  /**
   * Returns true if email format is valid
   *
   * @param {string}
   * @return {boolean}
   *
   */

  email(email) {
    return REGEX.EMAIL.test(email);
  }

  /**
   * Returns true if password follows the setted options
   *
   * @param {string}
   * @param {object}
   * @return {object}
   *
   */

  password(pass, options) {

    if (options && typeof options === 'object') {

      if (Object.keys(options).length === 0) { 
        throw new Error('options object is empty');
      }

      const ALLOWED_KEYS = [
        'numbers',
        'special_chars',
        'lowercase_quantity',
        'uppercase_quantity',
        'min',
        'max'
      ];

      for (let key of Object.keys(options)) {
        if (!ALLOWED_KEYS.includes(key))
          throw new Error(`key ${key} is not allowed`);
      }

      const { 
        numbers, 
        special_chars,
        lowercase_quantity,
        uppercase_quantity,
        min,
        max
      } = options;

      if (numbers && numbers === true) {
        if (!pass.match(/[0-9]/g))
          return {
            success: false,
            status: 1,
            message: 'Password must contain at least one number'
          };
      }

      if (special_chars && special_chars === true) {
        const regex = REGEX.SPECIAL_CHARS;
        if (!regex.test(pass))
          return {
            success: false,
            status: 2,
            message: 'Password must contain at least one special character'
          };
      }

      if (lowercase_quantity && !isNaN(lowercase_quantity)) {

        if (typeof lowercase_quantity === 'boolean')
          throw new Error('lowercase_quantity must be a number');

        const special_chars = REGEX.SPECIAL_CHARS;
        let occurrences = pass.split('').map(letter => { 
          return letter === letter.toLowerCase() && isNaN(letter) && !special_chars.test(letter) ? letter : ''
        }).join('');

        if (occurrences.length < lowercase_quantity)
          return {
            success: false,
            status: 3,
            message: `The password must contain at least ${Number(lowercase_quantity)} lowercase letter`
          };
      }

      if (uppercase_quantity && !isNaN(uppercase_quantity)) {

        if (typeof uppercase_quantity === 'boolean')
          throw new Error('uppercase_quantity must be a number');

        const special_chars = REGEX.SPECIAL_CHARS;
        let occurrences = pass.split('').map(letter => { 
          return letter === letter.toUpperCase() && isNaN(letter) && !special_chars.test(letter) ? letter : '' 
        }).join('');

        if (occurrences.length < uppercase_quantity)
          return {
            success: false,
            status: 4,
            message: `The password must contain at least ${Number(uppercase_quantity)} uppercase letter`
          }
      }

      if (min && !isNaN(min)) {
        if (pass.length < min)
          return {
            success: false,
            status: 5,
            message: `Password must be at least ${min} characters long`
          };
      }

      if (max && !isNaN(max)) {
        if (pass.length > max)
          return {
            success: false,
            status: 6,
            message: `The password must have a maximum of ${max} characters`
          };
      }

    } else {
      throw new Error('options object must exist');
    }

    return true;

  }  

  /**
   * Returns true if CPF format is valid
   *
   * @param {string}
   * @return {boolean}
   *
   */

  cpf(cpf) {
    return REGEX.CPF.test(cpf);
  }

  /**
   * Returns true if CNPJ format is valid
   *
   * @param {string}
   * @return {boolean}
   *
   */

  cnpj(cnpj) {
    return REGEX.CNPJ.test(cnpj);
  }

  /**
   * Returns true if zip code formats are valid
   *
   */

  zipcode_br(code) {
    return REGEX.ZIPCODE_BR.test(code); 
  }

  zipcode_ar(code) {
    return REGEX.ZIPCODE_AR.test(code); 
  }

  zipcode_us(code) {
    return REGEX.ZIPCODE_US.test(code); 
  }

  zipcode_ca(code) {
    return REGEX.ZIPCODE_CA.test(code); 
  }

  /**
   * Returns true if phone number formats are valid
   *
   */

  phone_br(number) {
    return REGEX.PHONE_BR.test(number); 
  }

  phone_us(number) {
    return REGEX.PHONE_US.test(number); 
  }

  phone_ca(number) {
    return REGEX.PHONE_CA.test(number); 
  }

  phone_ar(number) {
    return REGEX.PHONE_AR.test(number); 
  }

  /**
   * Returns true if phone credit cards are valid
   *
   */

  mastercard(number) {
    return REGEX.MasterCard.test(number); 
  }

  visa(number) {
    return REGEX.Visa.test(number); 
  }

  american_express(number) {
    return REGEX.AmericanExpress.test(number); 
  }

  elo(number) {
    return REGEX.ELO.test(number); 
  }

  hiper_card(number) {
    return REGEX.HiperCard.test(number); 
  }

  /**
   * Returns true if ipv4 format is valid
   *
   * @param {number}
   * @return {boolean}
   *
   */

  ipv4(number) {
    return REGEX.IPV4.test(number); 
  }

  /**
   * Returns true if ipv6 format is valid
   *
   * @param {number}
   * @return {boolean}
   *
   */

  ipv6(number) {
    return REGEX.IPV6.test(number); 
  }

}
