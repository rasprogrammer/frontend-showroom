import Logo from "./Logo";

export default function Sidebar() {
  return (
    <aside className="hidden w-[106px] shrink-0 flex-col items-center bg-sidebar pt-[78px] lg:flex">
      <Logo className="h-7 w-[76px] text-black" />
      <p
        aria-label="Style Takes Over"
        className="mb-8 mt-10 flex min-h-0 flex-1 justify-between text-[clamp(14px,2.4vh,22px)] font-light uppercase text-[#333] [writing-mode:vertical-rl]"
      >
        {"STYLE TAKES OVER".split("").map((ch, i) => (
          <span key={i} aria-hidden="true" className={ch === " " ? "h-[1em]" : undefined}>
            {ch}
          </span>
        ))}
      </p>
    </aside>
  );
}
