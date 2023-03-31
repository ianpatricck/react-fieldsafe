/*
 * Mask function
 *
 * @param {object}
 * @return {string}
 *
 */

export default function mask({ event, mask }) {

  if (event.target.value.trim() !== "" && event.key !== "Backspace") {

    let text = event.target.value;

    let maskArray   = mask.split('');
    let textArray   = text.split('');

    textArray = textArray.filter(element => {
      if (!maskArray.includes(element) && element.trim() !== "") {
        return element;
      }

      return null;

    });

    let textMasked = [];

    maskArray.forEach(elemMask => {

      if (elemMask !== "#") {
        textMasked.push(elemMask);
      } else {

        const findFirst = textArray.find(element => element)

        textArray.shift();
        textMasked.push(findFirst);
      }

    });

    event.target.value = textMasked.join('');
    return textMasked.join('');

  }

};

