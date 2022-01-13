import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* When passing anything other than text to Link, need to add
          our own anchor tag
        */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
