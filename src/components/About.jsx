import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="section-head about-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Support-side experience, developer-side curiosity.</h2>
        </div>

        <div className="about-body">
          <p>
            I work at the intersection of IT support and software development. Day to day that
            means diagnosing hardware faults, configuring devices, troubleshooting networks and
            managing Active Directory accounts — the kind of first-line work that keeps people
            productive.
          </p>
          <p>
            Alongside that, I build things: React interfaces, small tools backed by MongoDB, and
            APIs tested and documented in Postman. I like understanding a system end to end,
            whether that's a laptop that won't boot or a broken API call.
          </p>
          <p>
            I've supported customers across ticketing platforms like Zendesk and Zoho Desk, and
            I'm comfortable moving between Windows and Ubuntu environments. Outside of IT and
            code, I also work on graphic design — logos, posters and digital artwork.
          </p>
        </div>
      </div>
    </section>
  )
}
