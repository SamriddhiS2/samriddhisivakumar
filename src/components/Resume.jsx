/**
 * @copyright 2024 Samriddhi Sivakumar
 * @license Apache-2.0
 */

const Resume = () => {
  return (
    <section
      id="resume"
      className="section"
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-6">
          <span className="material-symbols-rounded">
            school
          </span>

          <h2 className="headline-2 reveal-up">
            Education
          </h2>
        </div>

        <ol className="ml-11">
          <li className="relative">
            <h3 className="title-1 mb-3">University of Washington</h3>
            <span>2022 - Present</span>
            <p className="">
              Description or something goes here
            </p>
          </li>

          <li className="relative">
            <h3 className="title-1 mb-3">University of Washington</h3>
            <span>2022 - Present</span>
            <p className="">
              Description or something goes here
            </p>
          </li>

          <li className="relative">
            <h3 className="title-1 mb-3">University of Washington</h3>
            <span>2022 - Present</span>
            <p className="">
              Description or something goes here
            </p>
          </li>
        </ol>

        <div className="flex items-center gap-4 mb-6">
          <span className="material-symbols-rounded">
            import_contacts
          </span>

          <h2 className="headline-2 reveal-up">
            Experience
          </h2>
        </div>

        <ol className="ml-11">
          <li className="relative">
            <h3 className="title-1 mb-3">University of Washington</h3>
            <span>2022 - Present</span>
            <p className="">
              Description or something goes here
            </p>
          </li>

          <li className="relative">
            <h3 className="title-1 mb-3">University of Washington</h3>
            <span>2022 - Present</span>
            <p className="">
              Description or something goes here
            </p>
          </li>

          <li className="relative">
            <h3 className="title-1 mb-3">University of Washington</h3>
            <span>2022 - Present</span>
            <p className="">
              Description or something goes here
            </p>
          </li>
        </ol>

        <h2 className="headline-2 reveal-up">
          My Skills
        </h2>

        {/* <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        </div> */}
      </div>
    </section>
  )
}

export default Resume