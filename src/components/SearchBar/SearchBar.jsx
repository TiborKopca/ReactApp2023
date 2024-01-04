import styles from './SearchBar.module.css'

export default function SearchBar(){
    return(
        <section className={styles.searchWrapper}>
            <form onSubmit={(e) => {
                                        e.preventDefault();
                                        alert('Searching...');
                                    }
                            }>
                <input className={styles.inputBar} placeholder="search"/>
                <button>Search</button>
            </form>
        </section>
    )
}
