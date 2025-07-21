import Accordion from "../components/Accordion"
import Gallery from "../components/Gallery"

export default function ProjectsPage({ repositories }) {
  // Filter repos with stars
  const starRepos = repositories.filter(repo => repo.stargazers_count > 0)

  return (
    <>
      <section className="flex flex-col gap-4">
        {starRepos.map((repo, i) => {
          // Build image URLs for this repo
          const images = [
            `${repo.html_url}/blob/${repo.default_branch}/public/desktop.webp?raw=true`,
            `${repo.html_url}/blob/${repo.default_branch}/public/tablet.webp?raw=true`,
            `${repo.html_url}/blob/${repo.default_branch}/public/phone.webp?raw=true`
          ]

          return (
            <Accordion key={repo.id || i} title={repo.name}>
              <div>
                <Gallery images={images} />
              </div>
            </Accordion>
          )
        })}
      </section>
    </>
  )
}
