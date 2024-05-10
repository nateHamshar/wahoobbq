import './page.css'
import Image from 'next/image'
import NoActiveHeader from '../NoActiveHeader'

export default function DineInMenuPage(){
    return (
        <main>
            <NoActiveHeader />
            <h1 className="title">Dine In Menu</h1>
            <a href="https://order.toasttab.com/online/wahoo-bbq-new-10-centre-court" className="order-link">Order Here for Pick Up</a>
            <section className='menu-section'>
                <div className="menu-div">
                    <Image 
                        src='/menu_1.webp'
                        alt="menu-image"
                        fill={true}
                        className="menu-image"
                    />
                </div>
                <div className="menu-div">
                    <Image 
                        src='/menu_2.webp'
                        alt="menu-image"
                        fill={true}
                        className="menu-image"
                    />
                </div>
                <div className="menu-div">
                    <Image 
                        src='/menu_3.webp'
                        alt="menu-image"
                        fill={true}
                        className="menu-image"
                    />
                </div>
                <div className="menu-div">
                    <Image 
                        src='/menu_4.webp'
                        alt="menu-image"
                        fill={true}
                        className="menu-image"
                    />
                </div>
                <div className="menu-div">
                    <Image 
                        src='/menu_5.webp'
                        alt="menu-image"
                        fill={true}
                        className="menu-image"
                    />
                </div>
                <div className="menu-div">
                    <Image 
                        src='/menu_6.webp'
                        alt="menu-image"
                        fill={true}
                        className="menu-image"
                    />
                </div>
            </section>
        </main>
    )
}