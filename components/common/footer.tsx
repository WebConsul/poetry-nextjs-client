import Image from "next/image";

export default function Footer() {
    return (
        <footer className="blog-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 ">
                        <h4>About</h4>
                        <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <h4>Полезные ссылки</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><a href="#" className="no-underline no-color">An item</a></li>
                            <li className="list-group-item"><a href="#" className="no-underline no-color">A second item</a></li>
                            <li className="list-group-item"><a href="#" className="no-underline no-color">A second item</a></li>
                            <li className="list-group-item"><a href="#" className="no-underline no-color">A second item</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center text-md-start">
                        Учите стихи! ©2022
                    </div>
                </div>
            </div>
        </footer>
    )
}
