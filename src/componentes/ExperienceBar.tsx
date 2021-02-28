import '../styles/global.css'
export function ExperienceBar(){
    return(
        <header className="experienceBar">
            <span>0 xp</span>
            <div>
                <div style={{width:'50%'}}/>

                <span className="current-experience" style={{left:'50%'}}>
                    300 XP
                </span>
            </div>
            <span>0 xp</span>
        </header>
    )
}