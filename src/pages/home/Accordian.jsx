const Accordian = () => {
    return (
        <div>

            <h2 className="text-3xl font-extrabold text-center lg:mb-10">Most frequently asked questions</h2>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    Do we ship globally?
                </div>
                <div className="collapse-content">
                    <p>Our shipping service does extend to a global scale. We do charge for shipping for some products but most of the products have free shipping.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is our return policy?
                </div>
                <div className="collapse-content">
                    <p>All purchases made at Artistry Marketplace can be returned within 30 days of receipt. To be eligible for a return, items must be unused, in the original packaging, and in the same condition as received. To initiate a return, please contact our customer service team with your order number and reason for return. Refunds will be processed to the original payment method within 7 days of receiving the returned item.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How long does delivery take?
                </div>
                <div className="collapse-content">
                    <p>Our delivery service is quite adapt and will ensure delivery within 10 days in all cases.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordian;