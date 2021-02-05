import React from "react";

const styles = {
    hr: {
        margin: 0,
        background: "red",
        height: "4px"
    }
}


function Header() {
    return (
    <section>
        <section className="container-fluid text-center bg-primary text-white pt-2 pb-3">
            <h1>Employee Directory</h1>
            <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
        </section>

        <hr style={styles.hr}></hr>

    </section>
    )
}

export default Header;