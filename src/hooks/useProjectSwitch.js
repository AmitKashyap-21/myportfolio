import { useState } from 'react';
import { projectsData } from '../data/projectsData';

export function useProjectSwitch(initialKey = 'rag') {
  const [activeKey, setActiveKey] = useState(initialKey);
  const [isFading, setIsFading] = useState(false);

  const switchProject = (key) => {
    if (key === activeKey || !projectsData[key]) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveKey(key);
      setIsFading(false);
    }, 150);
  };

  const activeProject = projectsData[activeKey];

  return {
    activeKey,
    activeProject,
    switchProject,
    isFading
  };
}
