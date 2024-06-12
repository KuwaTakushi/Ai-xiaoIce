export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="w-full overflow-y-hidden overflow-x-hidden bg-white" >
			<div>
				{children}
			</div>
		</section>
	);
}
