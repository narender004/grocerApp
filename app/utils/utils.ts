/**
 * Delay
 * @param {number} ms
 */
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Variants are sorted with seq no min seq
 * number should be selected by default.
 */
function sortVariantsBySeqNo(variants: any) {
  return variants.sort((a: any, b: any) => a.seqNo - b.seqNo);
}

export function getDefaultVariant(variants: Array<any>) {
  const sortedVariants = sortVariantsBySeqNo([...variants]);
  const inStockVariants = sortedVariants.filter(
    (variant: any) => variant.productVariant.stockAvailable,
  );

  return inStockVariants[0] ?? sortedVariants[0];
}

export const phoneNumberRegx = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

export function isPhoneNumber(text?: string) {
  if (!text) {
    return false;
  }
  return phoneNumberRegx.test(text);
}

// Add leading zero if needed
export function addZeroIfNeeded(num: number) {
  if (num < 10) {
    return `0${num}`;
  }

  return num;
}
