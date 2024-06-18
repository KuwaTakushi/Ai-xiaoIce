export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col overflow-x-hidden">
			<div>
				{children}
			</div>
		</section>
	);
}
