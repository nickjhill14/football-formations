import { getAllByAltText, render, RenderResult } from '@testing-library/react';
import { axe } from 'jest-axe';
import {
	DEFENDERS_HEADING,
	DEFENDERS_ICON_LABEL,
	DEFENDERS_SECTION_LABEL,
	FORWARDS_HEADING,
	FORWARDS_ICON_LABEL,
	FORWARDS_SECTION_LABEL,
	MIDFIELDERS_HEADING,
	MIDFIELDERS_ICON_LABEL,
	MIDFIELDERS_SECTION_LABEL,
} from '../../constants/formationDisplay';
import { buildFormation } from '../../utils/builders';
import FormationDisplay, { FormationDisplayProps } from './FormationDisplay';

const renderWith = (propsOverride?: Partial<FormationDisplayProps>): RenderResult => {
	const props: FormationDisplayProps = {
		formation: buildFormation(),
		...propsOverride,
	};
	return render(<FormationDisplay {...props} />);
};

describe('<FormationDisplay/>', () => {
	describe('rendering', () => {
		it('should render the formation sections', () => {
			const { getByRole } = renderWith();

			expect(getByRole('region', { name: DEFENDERS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: DEFENDERS_HEADING })).toBeInTheDocument();
			expect(getByRole('region', { name: MIDFIELDERS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: MIDFIELDERS_HEADING })).toBeInTheDocument();
			expect(getByRole('region', { name: FORWARDS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: FORWARDS_HEADING })).toBeInTheDocument();
		});

		it('should render the formation', () => {
			const defenders = 4;
			const midfielders = 4;
			const forwards = 2;
			const formation = buildFormation({ defenders, midfielders, forwards });

			const { getAllByLabelText } = renderWith({ formation });

			expect(getAllByLabelText(DEFENDERS_ICON_LABEL)).toHaveLength(defenders);
			expect(getAllByLabelText(MIDFIELDERS_ICON_LABEL)).toHaveLength(midfielders);
			expect(getAllByLabelText(FORWARDS_ICON_LABEL)).toHaveLength(forwards);
		});
	});

	describe('accessibility', () => {
		it('should have no axe violations', async () => {
			const { container } = renderWith();

			expect(await axe(container)).toHaveNoViolations();
		});
	});
});
