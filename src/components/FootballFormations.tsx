import {
	FOOTBALL_FORMATIONS_HEADING,
	FOOTBALL_FORMATIONS_SUBHEADING,
	FORMATIONS_SECTION_LABEL,
	FORMATIONS_SELECT_LABEL,
	HEADER_LABEL,
	MAIN_LABEL,
} from '../constants/footballFormations';

export default function FootballFormations() {
	return (
		<main aria-label={MAIN_LABEL}>
			<header aria-label={HEADER_LABEL}>
				<h1>{FOOTBALL_FORMATIONS_HEADING}</h1>
				<h2>{FOOTBALL_FORMATIONS_SUBHEADING}</h2>
			</header>
			<section aria-label={FORMATIONS_SECTION_LABEL}>
				<label htmlFor={FORMATIONS_SELECT_LABEL}>{FORMATIONS_SELECT_LABEL}</label>
				<select id={FORMATIONS_SELECT_LABEL} />
			</section>
		</main>
	);
}
