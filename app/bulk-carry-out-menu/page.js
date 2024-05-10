import NoActiveHeader from '../NoActiveHeader'
import './page.css'

export default function BulkCarryOutMenuPage(){
    return (
        <main>
            <NoActiveHeader />
            <h1 className="bulk-title">Bulk Carryout Menu</h1>
            <a href="https://www.toasttab.com/catering/wahoo-bbq-new-10-centre-court/" className="bulk-link">Order Online Here</a>
            <div className="bulk-menu">
                <h1 className="group-title">Smoked Meats</h1>
                <div className="bulk-items">
                    <h2 className='item-name'>Brisket: Tender Beef Smoked 16 Hours sliced to order</h2>
                    <h2 className="price">$20.00 per pound</h2>
                    <h2 className='item-name'>Pulled Pork: Award Winning Low and Slow BBQ</h2>
                    <h2 className="price">$14.00 per pound</h2>
                    <h2 className='item-name'>Pulled Chicken: Whole Smoked Chicken hand pulled</h2>
                    <h2 className="price">$15.00 per pound</h2>
                    <h2 className='item-name'>Baby Back Ribs: Half Rack (6 bones)</h2>
                    <h2 className="price">$15.00</h2>
                    <h2 className='item-name'>Baby Back Ribs: Full Rack (12 bones)</h2>
                    <h2 className="price">$28.00</h2>
                </div>
                <h1 className="group-title">Bulk Sides</h1>
                <div className="bulk-items">
                    <h2 className='item-name'>Mac and Cheese: Creamy 3 cheese Sauce over cavatappi</h2>
                    <h2 className="price">$10.00 per pound</h2>
                    <h2 className='item-name'>Potato Salad: Red potatoes dressed with bacon and onion</h2>
                    <h2 className="price">$10.00 per pound</h2>
                    <h2 className='item-name'>Baked Beans: Hearty beans gone southern cuisine</h2>
                    <h2 className="price">$10.00 per pound</h2>
                    <h2 className='item-name'>Green Beans: Grandma’s recipe cooked down for hours</h2>
                    <h2 className="price">$8.00 per pound</h2>
                    <h2 className='item-name'>Coleslaw: Shredded Cabbage, carrots sweet with a little tang</h2>
                    <h2 className="price">$8.00 per pound</h2>
                </div>
                <h1 className="group-title">Potato Rolls</h1>
                <div className="bulk-items">
                    <h2 className='item-name'>8 Pack:</h2>
                    <h2 className="price">$6.00</h2>
                    <h2 className='item-name'>4 Pack:</h2>
                    <h2 className="price">$3.00</h2>
                </div>
                <h1 className='group-title'>Drinks on the Fly</h1>
                <div className="bulk-items">
                    <h2 className='item-name'>2-Liter Pepsi, Diet Pepsi, Mountain Dew, or Dr Pepper:</h2>
                    <h2 className="price">$3.19</h2>
                </div>
            </div>
        </main>
    )
}