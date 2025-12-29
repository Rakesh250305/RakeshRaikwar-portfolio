export default function SkillBadge({ name }) {
  return (
    <span className="px-4 py-2 text-sm font-medium rounded-full 
      bg-blue-500/10 text-blue-400 border border-blue-500/20
      hover:bg-blue-500 hover:text-white transition">
      {name}
    </span>
  );
}
