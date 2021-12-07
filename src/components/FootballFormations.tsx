import { ChangeEvent, useState } from 'react';
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
} from '../constants/footballFormations';

export default function FootballFormations() {
	const [selectedFormation, setSelectedFormation] = useState('');

	const handleFormationSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
		setSelectedFormation(event.currentTarget.value);
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
			{selectedFormation && selectedFormation !== NO_FORMATION && (
				<section aria-label={FORMATION_DISPLAY_SECTION_LABEL}>
					<h3>{selectedFormation}</h3>
				</section>
			)}
		</main>
	);
}
