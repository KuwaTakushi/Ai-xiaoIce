export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="max-w-full overflow-x-hidden overflow-y-hidden">
			<div>
				{children}
			</div>
		</section>
	);
}
