function formatNumber(num) {
  if (typeof num !== 'number') return num

  num += ''

  return num.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
    return s + ','
  })
}

console.log(formatNumber(123456789))
