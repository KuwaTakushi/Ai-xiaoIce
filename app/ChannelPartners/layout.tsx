export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="max-w-full overflow-x-hidden overflow-y-hidden">
			<div className="text-center">
				{children}
			</div>
		</section>
	);
}
