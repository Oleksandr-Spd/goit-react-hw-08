import { TeamList } from "../components/TeamItem/TeamList/TeamList";

export default function HomePage() {
  return (
    <div style={{ marginTop: "110px" }}>
      <h1>Your incredible Contacts Book </h1>
      <h2>Our team</h2>
      <TeamList />
    </div>
  );
}
