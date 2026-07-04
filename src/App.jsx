import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { preprocessingData } from './data';
import { aiDomainsData } from './ai_domains_data';
import { aiCreationData } from './ai_creation_data';
import { algorithmsData } from './algorithms_data';
import TopicCard from './components/TopicCard';
import './index.css';
import { Database, FileJson, Settings, ArrowRight } from 'lucide-react';

const DataProcessingAnimation = () => {
  return (
    <div className="processing-animation">
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="anim-icon"
      >
        <FileJson size={48} strokeWidth={2} />
      </motion.div>
      
      <motion.div 
        animate={{ x: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowRight size={32} strokeWidth={3} />
      </motion.div>
      
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="anim-icon bg-yellow"
      >
        <Settings size={56} strokeWidth={2.5} />
      </motion.div>
      
      <motion.div 
        animate={{ x: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
      >
        <ArrowRight size={32} strokeWidth={3} />
      </motion.div>
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="anim-icon bg-green"
      >
        <Database size={48} strokeWidth={2} />
      </motion.div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('preprocessing');

  let currentData = preprocessingData;
  let heroTitle = "Data Preprocessing";
  let heroSubtitle = "From Raw Garbage to Gold";

  if (activeTab === 'domains') {
    currentData = aiDomainsData;
    heroTitle = "Artificial Intelligence Domains";
    heroSubtitle = "The Vast Landscape of Modern AI";
  } else if (activeTab === 'creation') {
    currentData = aiCreationData;
    heroTitle = "Building an AI Model";
    heroSubtitle = "The Step-by-Step Development Pipeline";
  } else if (activeTab === 'algorithms') {
    currentData = algorithmsData;
    heroTitle = "Machine Learning Algorithms";
    heroSubtitle = "The Mathematical Engines Powering AI";
  }

  return (
    <div className="app-container">
      {/* COMPANY HEADER */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="company-header"
      >
        <h1>CRACOE</h1>
        <p>Premium Data Science Course</p>
      </motion.nav>

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="hero"
      >
        <div className="hero-content">
          <DataProcessingAnimation />
          <h1>{heroTitle}</h1>
          <p className="subtitle">{heroSubtitle}</p>
        </div>
      </motion.header>

      {/* TAB NAVIGATION */}
      <div className="tabs-container">
        <button 
          className={`tab-btn ${activeTab === 'preprocessing' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('preprocessing')}
        >
          Data Preprocessing
        </button>
        <button 
          className={`tab-btn ${activeTab === 'creation' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('creation')}
        >
          How to Build an AI
        </button>
        <button 
          className={`tab-btn ${activeTab === 'algorithms' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('algorithms')}
        >
          Algorithms
        </button>
        <button 
          className={`tab-btn ${activeTab === 'domains' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('domains')}
        >
          AI Domains
        </button>
      </div>

      <main className="grid-container">
        {currentData.map((data, index) => (
          <TopicCard key={data.id + activeTab} data={data} index={index} />
        ))}
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="footer"
      >
        <p>Brought to you by CRACOE © 2026</p>
      </motion.footer>
    </div>
  );
}

export default App;
