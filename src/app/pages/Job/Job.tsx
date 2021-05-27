import React, { FunctionComponent, useEffect, useState } from "react";
import RelatedCard from "app/components/RelatedCard";
import { getJobRelatedSkills } from "app/store/main/actions";
import { useDispatch } from "react-redux";
import styles from "./Job.module.scss";

interface Props {
  match: { params: { id: string } };
}

const Job: FunctionComponent<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const [skills, setSkills] = useState<null | any[]>(null);

  const dispatch: any = useDispatch();
  const loadRelatedSkills = async () => {
    const result = await dispatch(getJobRelatedSkills(id));

    setSkills(result.data.skills);
  };
  useEffect(() => {
    loadRelatedSkills();
  }, []);
  return (
    <div className={styles.Job}>
      <div className="container">
        <h4>4th Grade Math Teacher</h4>
        <div className={styles.RelatedWrapper}>
          <h5>related skills:</h5>
          {skills &&
            skills.map(({ skill_uuid, skill_name, description }) => (
              <RelatedCard
                key={skill_uuid}
                data={{ title: skill_name, description }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
