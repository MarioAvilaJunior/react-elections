interface IMainProps {
  children?: React.ReactNode;
}

export function Main(props: IMainProps) {
  return <main className="container mx-auto p-4">{props.children}</main>;
}
