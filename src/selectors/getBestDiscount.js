export default ( books=[], offers, subTotal = 0 ) => {
     if ( books.length === 0 || offers.length === 0 ) {
         return { type: "none", value: 0, amount: 0 };
     }
     const discounts = [];
     offers.forEach( offer => {
         discounts.push( offer );
         switch ( offer.type ) {
             case 'percentage':
                 discounts[ discounts.length - 1 ].amount = offer.value / 100 * subTotal;
                 break;
             case 'minus':
                 discounts[ discounts.length - 1 ].amount = offer.value;
                 break;
             case 'slice':
                 discounts[ discounts.length - 1 ].amount = Math.floor( subTotal / offer.sliceValue ) * offer.value;
                 break;
             default:
                 break;
         }
     } );

    // we need to compare amount and keep all the other stuff
    const bestDiscount = discounts.reduce( ( maxOffer, offer ) => offer.amount > maxOffer.amount ? offer : maxOffer, discounts[ 0 ] );

    return {
        type: bestDiscount.type,
        amount: bestDiscount.amount
    }
};
