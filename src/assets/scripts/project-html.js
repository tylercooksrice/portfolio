export function getMyComponentHTML(project) {
    return `
    <span>
        <a href="${project.link}" target="_blank" title="Github Repository"><img src="public/images/github.png" id="github"></a>
        <h3>${project.projectName}</h3>
        <picture>
            <img src="${project.picture}" alt="${project.projectName}" title="${project.caption}">
        </picture>
        
        <detail>
            ${project.info}
        </detail>
    </span>
    `;
}
