const Section = ({
	id,
	children,
  className
}: {
	id: string;
	children: React.ReactNode;
  className?: string
}) => {
	return (
		<section className={className}>
			<a id={id} className="relative -top-20"></a>
			{children}
		</section>
	);
};

export default Section;
