import styles from "./WorkflowSteps.module.css";

type WorkflowStepsProps = {
  title: string;
  steps: string[];
};

export function WorkflowSteps({ title, steps }: WorkflowStepsProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="workflow-heading">
      <h2 id="workflow-heading" className={styles.title}>
        {title}
      </h2>
      <ol className={styles.list}>
        {steps.map((step, index) => (
          <li key={step} className={styles.item}>
            <span className={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.text}>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
