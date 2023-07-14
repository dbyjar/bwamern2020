export const formatNumber = (value) => {
  const formatNumbering = new Intl.NumberFormat("id-ID")
  return formatNumbering.format(value)
}