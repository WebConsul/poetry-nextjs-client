import Logo from "../../assets/image/LearnPoems.png";
import Image from "next/image";

export default function Header() {
    return (
        <div className="container-fluid">
            <header className="poems-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <a className="link-secondary no-underline" href="#">что-то</a>
                    </div>
                    <div className="col-4 text-center">
                        <a className="poems-header-logo d-none d-sm-block" href="#">
                            <Image src={Logo} alt="Logo" width="200px" height="39px" />
                        </a>
                        <a className="poems-header-logo d-sm-none" href="#">
                            LS
                        </a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <div className="dropdown">
                            <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Русский
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">English</a></li>
                                <li><a className="dropdown-item" href="#">Deutsch</a></li>
                                <li><a className="dropdown-item" href="#">Español</a></li>
                                <li><a className="dropdown-item" href="#">Français</a></li>
                                <li><a className="dropdown-item" href="#">Italiano</a></li>
                                <li><a className="dropdown-item" href="#">Português</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-sm btn-outline-secondary" href="#">Вход</a>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row">
                    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav d-flex justify-content-between">
                            <a className="p-2 link-secondary" href="#">тут</a>
                            <a className="p-2 link-secondary" href="#">может</a>
                            <a className="p-2 link-secondary" href="#">быть</a>
                            <a className="p-2 link-secondary" href="#">будут</a>
                            <a className="p-2 link-secondary" href="#">какие-то</a>
                            <a className="p-2 link-secondary" href="#">жанры</a>
                            <a className="p-2 link-secondary" href="#">или</a>
                            <a className="p-2 link-secondary" href="#">теги?</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
