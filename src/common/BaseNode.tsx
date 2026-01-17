type BaseNodeProps = {
  selected?: boolean;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function BaseNode({ selected, icon, title, subtitle, children }: BaseNodeProps) {
  return (
    <div
      className={`w-56 rounded-lg border bg-white p-3 shadow-sm ${
        selected ? 'border-[var(--primary-600)]' : 'border-slate-300'
      }`}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="text-[var(--primary-600)]">{icon}</div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-slate-800">{title}</span>

          {subtitle && (
            <span className="text-xs text-slate-500">{subtitle}</span>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}
export default BaseNode;
