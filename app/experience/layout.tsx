export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		// bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 
		<div className="relative min-h-screen  bg-black">
			{children}
		</div>
	);
}
