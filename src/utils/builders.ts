import { Formation } from './types';

export const buildFormation = (override?: Partial<Formation>): Formation => {
	return {
		defenders: 0,
		midfielders: 0,
		forwards: 0,
		...override,
	};
};
