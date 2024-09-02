import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const styles = {
    footerStyle: {
        background: "pink",
        justifyContent: "flex-end",
    },
};

// We use JSX curly braces to evaluate the style object

export default function Footer() {
    return (
        <Navbar
            fixed="bottom"
            expand="lg"
            className="bg-body-tertiary"
            style={styles.footerStyle}
        >
            <Nav className="mx-auto">
                <Nav.Link href="#home">Check out my GitHub</Nav.Link>
            </Nav>
        </Navbar>
    );
}
