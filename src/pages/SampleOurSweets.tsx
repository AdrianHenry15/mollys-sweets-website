import "../styles/SampleOurSweets.scss";

const SampleOurSweets = () => {
    return (
        <body className="sos-container">
            <h1>Our Sweets</h1>
            <div className="scroll-wrapper">
                <div className="scroll-container">
                    <h3 className="scroll-items-title">Cakes</h3>
                    <div className="scroll-items-container">
                        <div className="scroll-items"></div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default SampleOurSweets;