function Footer(){
    const styles = {
        height: '40px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#f3782d99'
    }
    return(
        <footer style={styles}>
            <p>&copy; {new Date().getFullYear()} Tibor Kopca</p>
        </footer>
    );
}
export default Footer