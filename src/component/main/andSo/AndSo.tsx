import styles from "./AndSo.module.scss";

interface Content {
  title: string;
  text: string;
  subcategory?: {
    sign: string;

    title: string;
    text: string;
  };
}

const whatWeSee: Content[] = [
  {
    title: "He knewthat the bestwayto create value",
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry, devilry, andcompulsion forcontrol that shaped his approach to business and the innovative products that resulted. He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry, devilry, andcompulsion forcontrol that shaped his approach to business and the innovative products that resulted.",
  },
  {
    title: "Walter Isaacson has written a riveting stor",
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry, devilry, andcompulsion forcontrol that shaped his approach to business and the innovative products that resulted.",
    subcategory: {
      sign: "'",
      title:
        "“Driven by demons, Jobs coulddrive those around him to fury and despair Buthispersonality and prod ucts were interrelated, just as Apple's hardware and software”",
      text:
        "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions.",
    },
  },
  {
    title: "Walter Isaacson has written a riveting stor",
    text:
      "He encouraged the people he knew to speak honestly. AndJobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes, and colleagues provide an unvarnished view ofthepassions, perfectionism, obses sions, artistry, devilry, andcompulsion forcontrol that shaped his approach to business and the innovative products that resulted.",
  },
];
const AndSo: React.FC = () => {
  return (
    <section className={styles.andSoContainer}>
      <h2>And so what we see</h2>
      <div className={styles.content}>
        {whatWeSee.map((item, index) => (
          <div className={styles.contentCard} key={index}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.subcategory ? (
              <div className={styles.subcategoryBlock}>
                <div className={styles.title}>
                  <div className={styles.arr}>
                    <p>{item.subcategory.sign}</p>
                    <p>{item.subcategory.sign}</p>
                  </div>
                  <h3>{item.subcategory.title}</h3>
                </div>
                <p className={styles.text}>{item.subcategory.text}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};
export default AndSo;
