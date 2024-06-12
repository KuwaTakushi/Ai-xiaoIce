export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center overflow-x-hidden">
			<div className="text-center justify-center">
				{children}
			</div>
		</section>
	);
}
