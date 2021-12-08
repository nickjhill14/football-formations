import { ReactElement } from 'react';
import { Formation } from '../../types';
import {
	DEFENDERS_HEADING,
	DEFENDERS_SECTION_LABEL,
	FORWARDS_HEADING,
	FORWARDS_SECTION_LABEL,
	MIDFIELDERS_HEADING,
	MIDFIELDERS_SECTION_LABEL,
} from '../../constants/formationDisplay';

export interface FormationDisplayProps {
	formation: Formation;
}

export default function FormationDisplay(_props: FormationDisplayProps): ReactElement {
	return (
		<>
			<section aria-label={DEFENDERS_SECTION_LABEL}>
				<h3>{DEFENDERS_HEADING}</h3>
			</section>
			<section aria-label={MIDFIELDERS_SECTION_LABEL}>
				<h3>{MIDFIELDERS_HEADING}</h3>
			</section>
			<section aria-label={FORWARDS_SECTION_LABEL}>
				<h3>{FORWARDS_HEADING}</h3>
			</section>
		</>
	);
}
