import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Formation } from '../../utils/types';
import {
	DEFENDERS_FORMATION_ARTICLE_LABEL,
	DEFENDERS_HEADING,
	DEFENDERS_ICON_LABEL,
	DEFENDERS_SECTION_LABEL,
	FORWARDS_FORMATION_ARTICLE_LABEL,
	FORWARDS_HEADING,
	FORWARDS_ICON_LABEL,
	FORWARDS_SECTION_LABEL,
	MIDFIELDERS_FORMATION_ARTICLE_LABEL,
	MIDFIELDERS_HEADING,
	MIDFIELDERS_ICON_LABEL,
	MIDFIELDERS_SECTION_LABEL,
} from '../../constants/formationDisplay';
import styles from './formation-display.module.scss';

export interface FormationDisplayProps {
	formation: Formation;
}

export default function FormationDisplay({ formation }: FormationDisplayProps): ReactElement {
	const { defenders, midfielders, forwards } = formation;

	return (
		<>
			<section aria-label={DEFENDERS_SECTION_LABEL}>
				<h3 className={styles.formationHeading}>{DEFENDERS_HEADING}</h3>
				<article aria-label={DEFENDERS_FORMATION_ARTICLE_LABEL} className={styles.formationRow}>
					{Array.from({ length: defenders }).map((_value, index) => (
						<FontAwesomeIcon icon={faUser} key={`${DEFENDERS_ICON_LABEL} ${index}`} aria-label={DEFENDERS_ICON_LABEL} />
					))}
				</article>
			</section>
			<section aria-label={MIDFIELDERS_SECTION_LABEL}>
				<h3 className={styles.formationHeading}>{MIDFIELDERS_HEADING}</h3>
				<article aria-label={MIDFIELDERS_FORMATION_ARTICLE_LABEL} className={styles.formationRow}>
					{Array.from({ length: midfielders }).map((_value, index) => (
						<FontAwesomeIcon
							icon={faUser}
							key={`${MIDFIELDERS_ICON_LABEL} ${index}`}
							aria-label={MIDFIELDERS_ICON_LABEL}
						/>
					))}
				</article>
			</section>
			<section aria-label={FORWARDS_SECTION_LABEL}>
				<h3 className={styles.formationHeading}>{FORWARDS_HEADING}</h3>
				<article aria-label={FORWARDS_FORMATION_ARTICLE_LABEL} className={styles.formationRow}>
					{Array.from({ length: forwards }).map((_value, index) => (
						<FontAwesomeIcon icon={faUser} key={`${FORWARDS_ICON_LABEL} ${index}`} aria-label={FORWARDS_ICON_LABEL} />
					))}
				</article>
			</section>
		</>
	);
}
