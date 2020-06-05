const CURRENCY_PRECISION = 2;
const LOCALE = 'en-GB';
const CURRENCY = 'GBP';

export default (value = 0, includeDecimal = false) => {
	const decimalDigits = includeDecimal && CURRENCY_PRECISION || 0;

	return value.toLocaleString(LOCALE, {
		style: 'currency',
		currency: CURRENCY,
		maximumFractionDigits: decimalDigits,
		minimumFractionDigits: decimalDigits
	});
};
