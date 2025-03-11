
export function getMyComponentCSS() {
	return `
    project-card section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
	      grid-template-rows: repeat(3 , auto);
    }
  `;
}