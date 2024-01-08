function Footer(){
    const styles = {
        height: '65px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#f3782d99',
        //it can be even object like next one
        theme: {
            textDecorationLine: 'underline',
            fontStyle: 'italic'
        }
    }

    return(
        <footer style={styles}>
            <p style={styles.theme}>&copy; {new Date().getFullYear()} Tibor Kopca</p>
        </footer>
    );
}
export default Footer