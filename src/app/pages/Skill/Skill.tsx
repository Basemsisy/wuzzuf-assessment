import React, { FunctionComponent } from "react";
import RelatedWrapper from "app/components/RelatedWrapper";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";
import { getSkillDetails } from "app/store/main/actions";
import styles from "./Skill.module.scss";

interface Props {
  match: { params: { id: string } };
}


const Skill: FunctionComponent<Props> = ({ match: {
  params: { id },
}, }) => {
  const { data, isLoading } = useAction(getSkillDetails, id);
  console.log(data)
  if (isLoading) return <Sppinner />
  return (
    <div className={styles.Skill}>
      <h4>{data?.skill_name}</h4>
      <RelatedWrapper type="job" data={data?.jobs} />
    </div>
  )
};

export default Skill;
