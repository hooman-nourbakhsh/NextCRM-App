import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>NextCRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <p>NextCRM | Copyright &copy; 2024 </p>
      </footer>
    </>
  );
}

export default Layout;
