import React, { FunctionComponent } from "react";
import styles from "./RelatedWrapper.module.scss";
import RelatedCard from "app/components/RelatedCard";


interface Props {
  type: 'skill' | 'job'
  data: any[];
  description?: string
}

const RelatedWrapper: FunctionComponent<Props> = ({ type, data, description }) => {
  return (
    <div className={styles.RelatedWrapper}>
      {description && <>
        <h5 style={{ marginBottom: '21px' }}>description:</h5>
        <p>{description}</p>
      </>}
      <h5>related {type}s:</h5>
      {data?.map((item: any, i) => (
        <RelatedCard key={i} type={type} data={item} />
      ))}
    </div>
  );
};

export default RelatedWrapper;