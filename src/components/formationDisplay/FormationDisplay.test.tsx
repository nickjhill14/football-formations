import { render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
	DEFENDERS_HEADING,
	DEFENDERS_SECTION_LABEL,
	FORWARDS_HEADING,
	FORWARDS_SECTION_LABEL,
	MIDFIELDERS_HEADING,
	MIDFIELDERS_SECTION_LABEL,
} from '../../constants/formationDisplay';
import FormationDisplay, { FormationDisplayProps } from './FormationDisplay';

const renderWith = (propsOverride?: Partial<FormationDisplayProps>): RenderResult => {
	const props: FormationDisplayProps = {
		formation: {
			defenders: 0,
			midfielders: 0,
			forwards: 0,
		},
		...propsOverride,
	};
	return render(<FormationDisplay {...props} />);
};

describe('<FormationDisplay/>', () => {
	describe('rendering', () => {
		it('should render the formation provided', () => {
			const { getByRole } = renderWith();

			expect(getByRole('region', { name: DEFENDERS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: DEFENDERS_HEADING })).toBeInTheDocument();
			expect(getByRole('region', { name: MIDFIELDERS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: MIDFIELDERS_HEADING })).toBeInTheDocument();
			expect(getByRole('region', { name: FORWARDS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: FORWARDS_HEADING })).toBeInTheDocument();
		});
	});

	describe('accessibility', () => {
		it('should have no axe violations', async () => {
			const { container } = renderWith();

			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
