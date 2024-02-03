import { cryptoAssets, cryptoData } from './data';

export const fakeFetchCrypto = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(cryptoData);
		}, 2);
	});
};
export const fetchAssets = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(cryptoAssets);
		}, 2);
	});
};
