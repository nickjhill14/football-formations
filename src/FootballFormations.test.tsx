import {render} from '@testing-library/react';
import FootballFormations from './FootballFormations';

describe('<FootballFormations/>', () => {
    it('should render the initial page', () => {
        const {getByRole} = render(<FootballFormations/>);
        expect(getByRole('heading', {name: 'Football Formations'})).toBeInTheDocument();
    });
});
