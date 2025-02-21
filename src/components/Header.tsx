/** @format */

export function Header() {
  return (
    <div className="container-profile">
      <div className="container-header">
        <img className="profile-pict" src="https://avatars.githubusercontent.com/u/167708452?s=400&u=2f2540e6d327f1e9fb3316e9aa4310b7c152ae05&v=4" alt="profile" />
        <div className="title">
          <h1 className="name">Mohamad Riki Fahrian</h1>
          <p className="webdev">Web Developer</p>
          <h1 className="description">
            Stay curious. Backend or Frontend? <br />I think i love both!
          </h1>
          <img src="/arrow.png" alt="ya" className="rounded" />
          <a href="mailto:rikyfhrian@gmail.com" className="interest">
            Interested in working together? Email me!
          </a>
        </div>
      </div>
    </div>
  );
}
