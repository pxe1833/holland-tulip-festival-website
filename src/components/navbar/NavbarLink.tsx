import { Link } from 'react-router';

export default function NavbarLink({
  text,
  target,
}: {
  text: string;
  target: string;
}) {
  return <Link to={target}>{text}</Link>;
}
