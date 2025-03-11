export function getMyComponentHTML(project) {
    return `
    <section>
        <h2>${project.projectName}</h2>
        <span>
            <h3>Project Details</h3>
            <picture>
                <img src="${project.picture}" alt="${project.projectName}">
            </picture>
            <a href="${project.link}" target="_blank">GitHub Repository</a>
            <detail>
                ${project.info}
            </detail>
        </span>
    </section>
    `;
}
