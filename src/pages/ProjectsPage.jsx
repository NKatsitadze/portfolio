import Section from "../components/Section"
import Accordion from "../components/Accordion"

export default function ProjectsPage ({ repositories }) {

    console.log(repositories)
    return (
        <>
            {/* <Section section="Projects" type="projects" renderData={repositories.filter(e => e.stargazers_count > 0)}  /> */}
            <Accordion>
                <div>hi</div>
            </Accordion>

        </>
    )
}