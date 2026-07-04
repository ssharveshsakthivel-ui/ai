import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Bug, Database, Sliders, LayoutGrid, Activity, CheckSquare, Square, SplitSquareHorizontal } from 'lucide-react';

const AnimContainer = ({ children }) => (
  <div className="step-animation-box">
    {children}
  </div>
);

const DataCleaning = () => (
  <AnimContainer>
    <motion.div
      animate={{ x: [-20, 20, -20], rotate: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      style={{ position: 'absolute', zIndex: 2 }}
    >
      <Trash2 size={40} strokeWidth={2} />
    </motion.div>
    <motion.div
      animate={{ opacity: [1, 0, 1], scale: [1, 0, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      style={{ position: 'absolute', right: 20, bottom: 20, color: 'red' }}
    >
      <Bug size={24} />
    </motion.div>
  </AnimContainer>
);

const DataIntegration = () => (
  <AnimContainer>
    <motion.div
      animate={{ x: [-30, 0, -30], opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ position: 'absolute', left: 10 }}
    >
      <Database size={24} />
    </motion.div>
    <motion.div
      animate={{ x: [30, 0, 30], opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ position: 'absolute', right: 10 }}
    >
      <Database size={24} />
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <Database size={48} strokeWidth={2.5} color="#0066ff" />
    </motion.div>
  </AnimContainer>
);

const DataTransformation = () => (
  <AnimContainer>
    <motion.div
      animate={{ rotate: [-45, 45, -45] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <Sliders size={48} strokeWidth={2.5} color="#ff0080" />
    </motion.div>
  </AnimContainer>
);

const DataReduction = () => (
  <AnimContainer>
    <motion.div
      animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <LayoutGrid size={48} strokeWidth={2} />
    </motion.div>
  </AnimContainer>
);

const HandlingOutliers = () => (
  <AnimContainer>
    <motion.div
      animate={{ scaleY: [1, 0.2, 1], color: ['#ff0000', '#000000', '#ff0000'] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <Activity size={48} strokeWidth={2} />
    </motion.div>
  </AnimContainer>
);

const FeatureSelection = () => (
  <AnimContainer>
    <div style={{ display: 'flex', gap: '10px' }}>
      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
        <CheckSquare size={32} color="#00ff88" strokeWidth={2.5} />
      </motion.div>
      <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}>
        <Square size={32} strokeWidth={2.5} />
      </motion.div>
    </div>
  </AnimContainer>
);

const TrainTestSplit = () => (
  <AnimContainer>
    <motion.div
      animate={{ width: ['100%', '80%', '100%'] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ height: '40px', backgroundColor: '#0066ff', border: '3px solid #000', borderRadius: '4px' }}
    />
    <motion.div
      animate={{ width: ['0%', '20%', '0%'] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{ height: '40px', backgroundColor: '#ffdf00', border: '3px solid #000', borderRadius: '4px', position: 'absolute', right: 20 }}
    />
  </AnimContainer>
);

const IntroAnimation = () => (
  <AnimContainer>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    >
      <Database size={48} />
    </motion.div>
  </AnimContainer>
);

export const getStepAnimation = (id) => {
  switch(id) {
    case 'intro': return <IntroAnimation />;
    case 'step1': return <DataCleaning />;
    case 'step2': return <DataIntegration />;
    case 'step3': return <DataTransformation />;
    case 'step4': return <DataReduction />;
    case 'step5': return <HandlingOutliers />;
    case 'step6': return <FeatureSelection />;
    case 'step7': return <TrainTestSplit />;
    default: return <IntroAnimation />;
  }
};
