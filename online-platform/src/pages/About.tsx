import React from 'react';
import '../styles/About.css';
import About1 from "../assets/About.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-title">Биз жөнүндө</h1>
        <p className="about-description">
          Ainabi – билимге умтулган ар бир адам үчүн түзүлгөн онлайн платформа. Биз билим берүүдө жеткиликтүүлүктү,
          сапатты жана замандын талабына жооп берген мүмкүнчүлүктөрдү сунуштайбыз.
        </p>

        <ul className="about-list">
          <li>✅ Тажрыйбалуу мугалимдер</li>
          <li>📚 Ыңгайлуу жана натыйжалуу курстар</li>
          <li>🌍 Ар кайсы жерден жеткиликтүү</li>
          <li>Билиминди онуктур</li>
        </ul>

        <p className="about-footer">
          Биз менен бирге өс, билим ал жана келечек кесипкөйү бол!
        </p>
      </div>

      <div className="about-image">
        <img src={About1} alt="Ainabi командасы" />
      </div>
    </div>
  );
};

export default About;
