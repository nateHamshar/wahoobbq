import Image from "next/image"
import './page.css'
import NoActiveHeader from "../NoActiveHeader"
export default function EventsPage(){
    return (
        <main>
            <NoActiveHeader />
            <div className="calendar-div">
                <Image 
                    src='/march-2024.webp'
                    alt="events calendar"
                    fill={true}
                    className="calendar-image"
                />
            </div>
        </main>
    )
}