import {Link} from "react-router-dom";

export function Header() {
  return (
    <header
      className="
        fixed top-0 inset-x-0 z-50
        h-24
        bg-white/90 backdrop-blur-xl
        border-b border-[var(--border-light)]
      "
    >
      <div className="h-full px-6 md:px-10 flex items-center">
        {/* Logo */}
        <Link
          to="/"
          className="
            text-xl font-extrabold
            text-[var(--text-primary)]
            mr-10
          "
        >
          FlowLab
        </Link>

        {/* Navigation */}
        <nav className="flex gap-5 flex-1">
          {[
            {label: "Overview", to: "/"},
            {label: "Kafka", to: "/playground"},
            {label: "Spring Security", to: "/playground"},
            {label: "Distributed", to: "/playground"},
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="
                font-medium
                text-[var(--text-secondary)]
                hover:text-[var(--text-primary)]
                transition
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/playground"
          className="
            px-5 py-2.5 rounded-xl
            font-semibold text-white
            gradient-primary
            gradient-primary-hover
            shadow-primary
            transition
          "
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
