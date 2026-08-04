import React from 'react';
import { 
  FileText, Cpu, Database, Sparkles, 
  Camera, Zap, Scan, Bell, 
  GitFork, Terminal, CheckSquare, GitPullRequest 
} from 'lucide-react';

const ICON_MAP = {
  'file-text': FileText,
  'cpu': Cpu,
  'database': Database,
  'sparkles': Sparkles,
  'camera': Camera,
  'zap': Zap,
  'scan': Scan,
  'bell': Bell,
  'git-fork': GitFork,
  'terminal': Terminal,
  'check-square': CheckSquare,
  'git-pull-request': GitPullRequest
};

export default function PipelineCard({ title, desc, icon, stage, status }) {
  const IconComponent = ICON_MAP[icon] || Cpu;

  return (
    <div className="apple-card hover:cursor-pointer apple-card-hover bg-white p-6 rounded-[18px] border border-apple-border shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="w-10 h-10 rounded-xl bg-apple-alt flex items-center justify-center text-apple-blue mb-4">
          <IconComponent className="w-5 h-5" />
        </div>
        <h4 className="text-base font-semibold text-apple-text mb-1">{title}</h4>
        <p className="text-xs text-apple-secondary leading-relaxed">{desc}</p>
      </div>
      <div className="mt-6 pt-3 border-t border-apple-border/60 flex justify-between items-center text-[11px] text-apple-muted font-medium">
        <span>{stage}</span>
        <span className="text-apple-blue font-semibold">{status}</span>
      </div>
    </div>
  );
}
