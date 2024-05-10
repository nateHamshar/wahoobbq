import './about.css'
import NoActiveHeader from '../NoActiveHeader'
import Image from 'next/image'
export default function AboutPage(){
    return (
        <main>
            <NoActiveHeader />
            <section className='pitmaster-section'>
                <div className="pitmaster-image-div">
                    <Image 
                        src="/pitmaster.webp"
                        alt="pit master"
                        fill={true}
                        className="pit master"
                    />
                </div>
                <div className="text-div">
                    <h1 className="title">Meet the Pit Master.</h1>
                    <p className="text">Hi, I'm Howie Brown, pit master at Wahoo BBQ! I am a home taught chef, and home is where it all started. Both my parents are great cooks, each in there own style handed down from their elders. My Dad got outside and cooked on the grill every chance he got. Watching how much he enjoyed that sparked my interest in grilling and BBQ. I've had may different grills but the Big Green Egg is what really fueled my barbecue addiction. I have fine tuned many recipes, rubs, sauces, and techniques throughout my years of outdoor cooking and it has become a passion of mine. I now have built a smoker to be able to cater any event of any size, and I am excited to provide good quality barbecue to the community.</p>
                </div>
            </section>
        </main>
    )
}