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
    const today = new Date();
    
    function formatDate(date){
        return new Intl.DateTimeFormat(
            'en-US',
            { weekday: 'long'}
            ).format(date);
    }

    return(
        <footer style={styles}>
            <p>&copy; {new Date().getFullYear()} Tibor Kopca</p>
            <p style={styles.theme}>Have a nice {formatDate(today)}</p>
        </footer>
    );
}
export default Footer