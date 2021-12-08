import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import {
	FOOTBALL_FORMATIONS_HEADING,
	FOOTBALL_FORMATIONS_SUBHEADING,
	FORMATION_DISPLAY_SECTION_LABEL,
	FORMATIONS,
	FORMATION_SELECTION_SECTION_LABEL,
	FORMATIONS_SELECT_LABEL,
	HEADER_LABEL,
	MAIN_LABEL,
	NO_FORMATION,
} from '../../constants/footballFormations';
import {
	DEFENDERS_SECTION_LABEL,
	MIDFIELDERS_SECTION_LABEL,
	FORWARDS_SECTION_LABEL,
} from '../../constants/formationDisplay';
import FootballFormations from './FootballFormations';

describe('<FootballFormations/>', () => {
	const { selectOptions, tab } = userEvent;

	describe('rendering', () => {
		it('should render the initial page', () => {
			const { getByRole, queryByRole } = render(<FootballFormations />);

			expect(getByRole('main', { name: MAIN_LABEL })).toBeInTheDocument();
			expect(getByRole('banner', { name: HEADER_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: FOOTBALL_FORMATIONS_HEADING })).toBeInTheDocument();
			expect(getByRole('heading', { name: FOOTBALL_FORMATIONS_SUBHEADING })).toBeInTheDocument();
			expect(getByRole('region', { name: FORMATION_SELECTION_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL })).toBeInTheDocument();
			expect(getByRole('option', { name: NO_FORMATION })).toBeInTheDocument();
			FORMATIONS.forEach((formation) => expect(getByRole('option', { name: formation })).toBeInTheDocument());
			expect(queryByRole('region', { name: FORMATION_DISPLAY_SECTION_LABEL })).not.toBeInTheDocument();
		});
	});

	describe('interaction', () => {
		it('should show selected formation on selection', () => {
			const selectedFormation = FORMATIONS[0];

			const { getByRole } = render(<FootballFormations />);
			selectOptions(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL }), selectedFormation);

			expect(getByRole('region', { name: FORMATION_DISPLAY_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: selectedFormation })).toBeInTheDocument();
			expect(getByRole('region', { name: DEFENDERS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('region', { name: MIDFIELDERS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('region', { name: FORWARDS_SECTION_LABEL })).toBeInTheDocument();
		});

		it('should remove selected formation on change back to none', () => {
			const { getByRole, queryByRole } = render(<FootballFormations />);
			selectOptions(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL }), FORMATIONS[0]);
			selectOptions(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL }), NO_FORMATION);

			expect(queryByRole('region', { name: FORMATION_DISPLAY_SECTION_LABEL })).not.toBeInTheDocument();
		});
	});

	describe('accessibility', () => {
		it('should have no axe violations', async () => {
			const { container } = render(<FootballFormations />);

			expect(await axe(container)).toHaveNoViolations();
		});

		it('should focus the formation select after initial tab interaction', () => {
			const { getByRole } = render(<FootballFormations />);
			tab();

			expect(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL })).toHaveFocus();
		});
	});
});
