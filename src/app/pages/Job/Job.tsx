import React, { FunctionComponent } from "react";
import { getJobRelatedJobs, getJobRelatedSkills } from "app/store/main/actions";
import styles from "./Job.module.scss";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";
import RelatedWrapper from "app/components/RelatedWrapper";
import Sidebar from "app/components/Sidebar";
import { Link } from "react-router-dom";

interface Props {
  match: { params: { id: string } };
}

const Job: FunctionComponent<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const { isLoading, data: jobDetails } = useAction(getJobRelatedSkills, id, true);
  const { data: relatedJobs } = useAction(getJobRelatedJobs, id, true);
  if (isLoading) return <Sppinner />;
  return (
    <div className={styles.Job}>
      <h4>{jobDetails?.job_title}</h4>
      <div className="grid-2-1">
        <RelatedWrapper type="skill" data={jobDetails?.skills} />
        <Sidebar title="related jobs" >
          {relatedJobs?.related_job_titles.map((job: any, i: number) => (
            <li key={job.uuid}>
              <Link to={`/job/${job.uuid}`}>
                {job?.title}
              </Link>
            </li>
          ))}
        </Sidebar>
      </div>
    </div>
  );
};

export default Job;

// {
//   data?.map((item, i) => (
//     <li key={item.uuid}>
//       <Link to={`/${type}/${item.uuid}`}>
//         {type === 'job' ? item?.title : item.skill_name}
//       </Link>
//     </li>
//   ))
// }