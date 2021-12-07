import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import {
	FOOTBALL_FORMATIONS_HEADING,
	FOOTBALL_FORMATIONS_SUBHEADING,
	FORMATIONS_SECTION_LABEL,
	FORMATIONS_SELECT_LABEL,
	HEADER_LABEL,
	MAIN_LABEL,
} from '../constants/footballFormations';
import FootballFormations from './FootballFormations';

expect.extend(toHaveNoViolations);

describe('<FootballFormations/>', () => {
	describe('rendering', () => {
		it('should render the initial page', () => {
			const { getByRole } = render(<FootballFormations />);

			expect(getByRole('main', { name: MAIN_LABEL })).toBeInTheDocument();
			expect(getByRole('banner', { name: HEADER_LABEL })).toBeInTheDocument();
			expect(getByRole('heading', { name: FOOTBALL_FORMATIONS_HEADING })).toBeInTheDocument();
			expect(getByRole('heading', { name: FOOTBALL_FORMATIONS_SUBHEADING })).toBeInTheDocument();
			expect(getByRole('region', { name: FORMATIONS_SECTION_LABEL })).toBeInTheDocument();
			expect(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL })).toBeInTheDocument();
		});
	});

	describe('accessibility', () => {
		it('should have no axe violations', async () => {
			const { container } = render(<FootballFormations />);

			expect(await axe(container)).toHaveNoViolations();
		});

		it('should focus the formation select after initial tab interaction', () => {
			const { getByRole } = render(<FootballFormations />);
			userEvent.tab();

			expect(getByRole('combobox', { name: FORMATIONS_SELECT_LABEL })).toHaveFocus();
		});
	});
});
