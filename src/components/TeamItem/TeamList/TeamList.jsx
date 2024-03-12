import { TeamItem } from "../TeamItem";
import css from "./TeamList.module.css";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";
import img6 from "../../../images/img6.jpg";
import img7 from "../../../images/img7.jpg";

export const TeamList = () => {
  return (
    <ul className={css.teamList}>
      <li>
        <TeamItem
          img={img4}
          name={"Mark Guerrero"}
          title={"Chief executive officer"}
        />
      </li>
      <li>
        <TeamItem img={img5} name={"Rob Dillan"} title={"Developer"} />
      </li>
      <li>
        <TeamItem
          img={img6}
          name={"Britni Morgan"}
          title={"Product Designer"}
        />
      </li>
      <li>
        <TeamItem img={img7} name={"Ben Aflec"} title={"Developer"} />
      </li>
    </ul>
  );
};
