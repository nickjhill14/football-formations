import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Formation } from '../../utils/types';
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

export interface FormationDisplayProps {
	formation: Formation;
}

export default function FormationDisplay({ formation }: FormationDisplayProps): ReactElement {
	const { defenders, midfielders, forwards } = formation;

	return (
		<>
			<section aria-label={DEFENDERS_SECTION_LABEL}>
				<h3>{DEFENDERS_HEADING}</h3>
				{Array.from({ length: defenders }).map((_value, index) => (
					<FontAwesomeIcon icon={faUser} key={`${DEFENDERS_ICON_LABEL} ${index}`} aria-label={DEFENDERS_ICON_LABEL} />
				))}
			</section>
			<section aria-label={MIDFIELDERS_SECTION_LABEL}>
				<h3>{MIDFIELDERS_HEADING}</h3>
				{Array.from({ length: midfielders }).map((_value, index) => (
					<FontAwesomeIcon
						icon={faUser}
						key={`${MIDFIELDERS_ICON_LABEL} ${index}`}
						aria-label={MIDFIELDERS_ICON_LABEL}
					/>
				))}
			</section>
			<section aria-label={FORWARDS_SECTION_LABEL}>
				<h3>{FORWARDS_HEADING}</h3>
				{Array.from({ length: forwards }).map((_value, index) => (
					<FontAwesomeIcon icon={faUser} key={`${FORWARDS_ICON_LABEL} ${index}`} aria-label={FORWARDS_ICON_LABEL} />
				))}
			</section>
		</>
	);
}
