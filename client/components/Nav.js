import Link from "next/link";


const Nav = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link href = "/" className="mav-link active">
                    <a>Home</a>
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
            </li>
            <li className="nav-item">
            <Link href = "/login" className="mav-link active">
                    <a>Login</a>
                </Link>
                {/* <a className="nav-link" href="#">Link</a> */}
            </li>
            <li className="nav-item">
            <Link href = "/register" className="mav-link active">
                    <a>Register</a>
                </Link>
                {/* <a className="nav-link" href="#">Link</a> */}
            </li>
            <li className="nav-item">
                {/* <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a> */}
            </li>
        </ul>

    );
};

export default Nav; 