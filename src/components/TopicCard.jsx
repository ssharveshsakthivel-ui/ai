import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { getStepAnimation } from './StepAnimations';

const TopicCard = ({ data, index }) => {
  const IconComponent = Icons[data.icon] || Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02, x: -5, y: -5, boxShadow: "15px 15px 0px 0px rgba(0,0,0,1)" }}
      className="topic-card"
      style={{ backgroundColor: data.color }}
    >
      <div className="card-header">
        <div className="icon-container">
          <IconComponent size={32} strokeWidth={2.5} />
        </div>
        <h2>{data.title}</h2>
      </div>
      
      {/* UNIQUE STEP ANIMATION HERE */}
      <div className="card-animation-wrapper">
        {getStepAnimation(data.id)}
      </div>

      <p className="description">{data.description}</p>
      {data.points && data.points.length > 0 && (
        <ul className="points-list">
          {data.points.map((point, idx) => (
            <li key={idx}>
              <Icons.ArrowRight size={16} strokeWidth={3} className="list-icon" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default TopicCard;
