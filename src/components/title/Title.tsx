interface TitleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export function Title({ children, ...rest }: TitleProps) {
  return (
    <div className="w-full ">
      <h3 className="text-lg w-fit font-bold text-primary py-4">
        {children}
        <div className="w-auto h-1 bg-primary mb-1 animate-bounce" />
        <div className="w-1/2 h-1 bg-primary animate-bounce " />
      </h3>
    </div>
  );
}
