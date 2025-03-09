import React from 'react';

const Activities: React.FC = () => {
  const activities = [
    {
      title: "Hackville 2023",
      description: "Led development of a currency conversion platform, winning the 'Best Financial Tech Solution' award.",
    },
    {
      title: "DeerHacks 2023",
      description: "Developed an ML-powered Recipe Recommendation System at University of Toronto's hackathon.",
    },
    {
      title: "GDG Toronto",
      description: "Active member contributing to technical workshops and peer learning initiatives.",
    },
    {
      title: "Volunteering",
      description: "Volunteered at hackathons and school clubs, contributing to organizing events and mentoring participants.",
    },
  ];

  return (
    <section id="activities">
      <h2>Activities & Achievements</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;