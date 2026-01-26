export function weightKgToLbs(w) {
  return w * 2.2046226218
}

export function weightLbsToKg(w) {
  return w / 2.2046226218
}

export function volumeCLtoUSOZ(cl) {
  // centiliter to US fluid ounces
  // 1 cl = 0.338140225 US fl oz
  return cl * 0.338140225
}

export function volumeCLtoUKOZ(cl) {
  // centiliter to UK (imperial) fluid ounces
  // 1 cl = 0.351195720 UK fl oz
  return cl * 0.35119572
}
