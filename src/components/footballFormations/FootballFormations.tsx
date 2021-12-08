import { ChangeEvent, ReactElement, useState } from 'react';
import { Formation } from '../../types';
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
import FormationDisplay from '../formationDisplay/FormationDisplay';

export default function FootballFormations(): ReactElement {
	const [selectedFormation, setSelectedFormation] = useState('');

	const transformToFormation = (formation: string): Formation => {
		const parsedFormation = formation.split('-').map((position) => parseInt(position));
		return { defenders: parsedFormation[0], midfielders: parsedFormation[1], forwards: parsedFormation[2] };
	};

	const handleFormationSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
		const formation = event.currentTarget.value;
		formation === NO_FORMATION ? setSelectedFormation('') : setSelectedFormation(formation);
	};

	return (
		<main aria-label={MAIN_LABEL}>
			<header aria-label={HEADER_LABEL}>
				<h1>{FOOTBALL_FORMATIONS_HEADING}</h1>
				<h2>{FOOTBALL_FORMATIONS_SUBHEADING}</h2>
			</header>
			<section aria-label={FORMATION_SELECTION_SECTION_LABEL}>
				<label htmlFor={FORMATIONS_SELECT_LABEL}>{FORMATIONS_SELECT_LABEL}</label>
				<select id={FORMATIONS_SELECT_LABEL} onChange={handleFormationSelect}>
					<option defaultChecked>{NO_FORMATION}</option>
					{FORMATIONS.map((formation) => (
						<option key={formation} value={formation}>
							{formation}
						</option>
					))}
				</select>
			</section>
			{selectedFormation && (
				<section aria-label={FORMATION_DISPLAY_SECTION_LABEL}>
					<h3>{selectedFormation}</h3>
					<FormationDisplay formation={transformToFormation(selectedFormation)} />
				</section>
			)}
		</main>
	);
}
