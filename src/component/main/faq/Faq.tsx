import { useState } from "react";
import styles from "./Faq.module.scss";

interface FAQ {
  title: string;
  text1: string;
  text2?: string;
}

const faqs: FAQ[] = [
  {
    title:
      "HOW OFTEN IS YOUR FEED UPDATED / HOW FAST AND RESPONSIVE IS YOUR FEED?",
    text1:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
    text2:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
  },
  {
    title: "DO YOU OFFER AUTOMATIC SETTLEMENTS?",
    text1:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
  },
  {
    title: "HOW DO YOU PROVIDE YOUR DATA?",
    text1:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
    text2:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
  },
  {
    title: "WHAT PROGRAMMING LANGUAGES DO YOU SUPPORT FOR THE CONNECTIONS?",
    text1:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
  },
  {
    title: "WHAT IS YOUR FEEDS’ FORMAT?",
    text1:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
    text2:
      "After the clients agree on the packaging and request a trial account, our reliable Tech Support Team support clients to go to production. The system uses PULL (via HTTP requests) and PUSH (via TCP socket) APIs. You connect to the feed and the server starts sending you our system data for your account configuration, we call that the initial data dump, once that is finished, any change that happens in the system will be sent to you as an update if you remain connected to the feed and keep reading the data.",
  },
];

const Faq: React.FC = () => {
  const [active, setActive] = useState<number[]>([]);

  const buttonClick = (index: number) => {
    setActive((prevActiveItems) => {
      if (prevActiveItems.includes(index)) {
        return prevActiveItems.filter((item) => item !== index);
      } else {
        return [...prevActiveItems, index];
      }
    });
  };

  return (
    <section className={styles.faqWrappe}>
      <h2>
        FREQUENTLY ASKED
        <br /> QUESTIONS
      </h2>
      {faqs.map((item, index) => (
        <div className={styles.faqCard} key={index}>
          <div
            className={`${styles.title} ${
              active.includes(index) ? styles.active : ""
            }`}
          >
            <p>{item.title}</p>
            <button onClick={() => buttonClick(index)}>
              {active.includes(index) ? <p>-</p> : <p>+</p>}
            </button>
          </div>
          <div
            className={`${styles.faqText} ${
              active.includes(index) ? styles.active : ""
            }`}
          >
            <p>{item.text1}</p>
            {item.text2 ? <p>{item.text2}</p> : null}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
