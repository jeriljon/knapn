import React from 'react';
import styles from './Body.module.css'; // Make sure the path matches your file structure

const Body = () => {
  return (
    <div className={styles.body}>
      <h1>Introducing Knapn: Your Data, Empowered by AI</h1>
      <p>In the era of information overload, making sense of vast data can be overwhelming. Knapn revolutionizes this process, transforming raw data into intelligent, conversational insights. Designed for professionals across industries, Knapn leverages the power of Language Learning Models (LLMs) to unlock the full potential of your data.</p>
      <h2>The Essence of Knapn</h2>
      <p>Knapn is an advanced AI tool that ingests your uploaded data, creating a tailored LLM that understands the context and nuances of your information. This innovative approach allows users to interact with their data through simple English queries, making complex data analysis accessible to everyone.</p>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Custom LLM Creation:</strong> Automatically generates a bespoke LLM from your uploaded data, providing you with a personalized data assistant.</li>
        <li><strong>Conversational Insights:</strong> Ask questions in plain English and receive precise answers, extracting the exact information you need without sifting through spreadsheets or databases.</li>
        <li><strong>Advanced Data Visualization:</strong> Beyond verbal insights, Knapn visualizes your data, presenting complex information in an intuitive, easily digestible format.</li>
        <li><strong>Real-Time Learning:</strong> Continuously learns from new data, ensuring the insights and visualizations evolve with your growing dataset.</li>
        <li><strong>Cross-Industry Application:</strong> Whether you're in finance, healthcare, education, or any other field, Knapn adapts to your specific data needs, offering relevant, actionable insights.</li>
      </ul>
      <h2>How It Works</h2>
      <ul>
        <li>Upload Your Data: Securely upload your data to Knapn. Our platform supports a wide range of data formats, ensuring compatibility and ease of use.</li>
        <li>Automatic Model Generation: Knapn analyzes your data, automatically creating a customized LLM that understands the context, trends, and patterns within your dataset.</li>
        <li>Engage with Your Data: Ask your data questions, explore hypotheses, or request insights through our user-friendly interface. Knapn interprets your queries, diving deep into the dataset to fetch accurate, relevant answers.</li>
        <li>Visualize and Interpret: Beyond textual insights, Knapn offers powerful visualization tools, turning data points into compelling graphs and charts for better understanding and presentation.</li>
      </ul>
      <h2>Why Choose Knapn?</h2>
      <ul>
        <li>Accessibility: Makes advanced data analysis accessible to users of all skill levels, eliminating the need for complex queries or programming knowledge.</li>
        <li>Efficiency: Saves time and resources by providing quick, accurate answers and insights from your data, enabling faster decision-making.</li>
        <li>Adaptability: Customizable and scalable, Knapn grows with your data, continuously improving and adapting to provide the most relevant insights.</li>
        <li>Security: We prioritize your data's security, ensuring that your information remains confidential and protected throughout the process.</li>
      </ul>
      <h2>Ready to Transform Your Data into Insights?</h2>
      <p>Knapn is more than just a tool; it's your data's best ally, bridging the gap between raw information and meaningful insights. Whether you're looking to answer specific questions, uncover trends, or simply explore your data, Knapn empowers you to do more, effortlessly. Unlock the potential of your data today with Knapn. Discover insights, make informed decisions, and visualize success in a whole new light. Welcome to the future of data analysis. Welcome to Knapn.</p>
    </div>
  );
}

export default Body;
