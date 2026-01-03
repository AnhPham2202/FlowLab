import React, { useState } from 'react';
import { ChevronDown, ChevronRight, type LucideIcon, Plus } from 'lucide-react';

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon; // Pass the component reference, not the rendered element
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface ReusableSidebarProps {
  title: string;
  subtitle: string;
  sections: SidebarSection[];
  onAddNode: (type: string) => void;
  accentColor?: string; // Optional: e.g., 'from-blue-500 to-cyan-500'
}

export const Sidebar = ({
  title,
  subtitle,
  sections,
  onAddNode,
  accentColor = 'from-indigo-500 to-purple-500',
}: ReusableSidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(Object.fromEntries(sections.map((s) => [s.title, true])));

  return (
    <aside
      className={`fixed left-5 top-5 z-50 w-60 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[80vh]' : 'max-h-12'
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex h-12 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur transition hover:bg-slate-50"
      >
        {/* Left Side: Logo & Labels */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br ${accentColor} text-white shadow-sm`}
          >
            {React.createElement(sections[0]?.items[0]?.icon || ChevronDown, {
              size: 14,
            })}
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm font-semibold text-slate-900">
              {title}
            </span>
            <span className="text-[11px] text-slate-500">{subtitle}</span>
          </div>
        </div>

        {/* Right Side: Status & Toggle */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <ChevronDown
            size={14}
            className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-y-auto transition-all duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        {sections.map((section) => {
          const expanded = expandedSections[section.title];

          return (
            <div
              key={section.title}
              className="border-b border-slate-100 last:border-none"
            >
              <button
                onClick={() =>
                  setExpandedSections((p) => ({
                    ...p,
                    [section.title]: !p[section.title],
                  }))
                }
                className="flex w-full items-center gap-2 bg-slate-50/50 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-100"
              >
                {expanded ? (
                  <ChevronDown size={12} />
                ) : (
                  <ChevronRight size={12} />
                )}
                {section.title}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-0'}`}
              >
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) =>
                      e.dataTransfer.setData('application/reactflow', item.id)
                    }
                    onClick={() => onAddNode(item.id)}
                    className="group flex cursor-grab items-center justify-between px-4 py-2 hover:bg-indigo-50/50 active:cursor-grabbing"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={14} className="text-indigo-500" />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600">
                        {item.label}
                      </span>
                    </div>
                    <Plus
                      size={12}
                      className="text-slate-400 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
