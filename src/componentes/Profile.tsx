import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className= {styles.profileContainer}>
            <img src="https://github.com/g-bolsoni.png" alt="Giovane Bolsoni"/>
            <div>
                <strong>Giovane Bolsoni</strong>
                <p>
                    <img src="icons/level.svg" alt="levelIcon"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}