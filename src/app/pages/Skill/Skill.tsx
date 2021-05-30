import React, { FunctionComponent } from "react";
import RelatedWrapper from "app/components/RelatedWrapper";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";
import { getSkillDescription, getSkillRelatedJobs, getSkillRelatedSkills } from "app/store/main/actions";
import styles from "./Skill.module.scss";
import Sidebar from "app/components/Sidebar";

interface Props {
  match: { params: { id: string } };
}


const Skill: FunctionComponent<Props> = ({ match: {
  params: { id },
}, }) => {
  const { data, isLoading } = useAction(getSkillRelatedJobs, id, true);
  const { data: relatedSkills } = useAction(getSkillRelatedSkills, id, true);
  const { data: description } = useAction(getSkillDescription, id, true);

  if (isLoading) return <Sppinner />
  return (
    <div className={styles.Skill}>
      <h4>{data?.skill_name}</h4>
      <div className="grid-2-1">
        <RelatedWrapper description={description.description} type="job" data={data?.jobs} />
        <Sidebar type="skill" title="related skills" data={relatedSkills?.skills} />
      </div>
    </div>
  )
};

export default Skill;
