import Accordion from "../components/Accordion"
import Gallery from "../components/Gallery"
import ProjectDetails from "../datas/projects.json"

export default function ProjectsPage({ repositories }) {
  const starRepos = repositories.filter(repo => repo.stargazers_count > 0)

  return (
    <section className="flex flex-col gap-4">
      {starRepos.map((repo, i) => {
        const images = [
          `${repo.html_url}/blob/${repo.default_branch}/public/desktop.webp?raw=true`,
          `${repo.html_url}/blob/${repo.default_branch}/public/tablet.webp?raw=true`,
          `${repo.html_url}/blob/${repo.default_branch}/public/phone.webp?raw=true`
        ]

        const project = ProjectDetails.find(p => p.key === repo.name)
        const sentences = project?.sentences || ["No description available."]

        return (
          <Accordion key={repo.id || i} title={repo.name}>
            <div className="flex justify-around items-center gap-4">
              <div className="flex-1" style={{maxWidth: '50%'}}>
                {sentences.map((text, idx) => (
                  <p key={idx} className="">
                    {text}
                  </p>
                ))}
              </div>
              <Gallery images={images} />
            </div>
          </Accordion>
        )
      })}
    </section>
  )
}
