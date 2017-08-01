let nvl = (v,r) => {
	return !v || typeof v === 'undefined' ? r : v
}
module.exports = nvl