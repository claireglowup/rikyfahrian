import { Card } from "./Card";

export function Project() {
  return (
    <div className="latest-project">
      <h1 className="header-lp">Latest Project 📂</h1>
      <div className="card-cover">
        <Card />
        <Card />
      </div>
    </div>
  );
}
