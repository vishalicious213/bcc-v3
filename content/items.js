// weight is in oz / other dimensions are in inches

const items = [
    {
        id: 10,
        name: 'Breakfast',
        price: 700,
        short: 'Bacon ipsum dolor amet picanha doner spare ribs, shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef. Pork biltong ground round pig. Chicken filet mignon sausage cow corned beef. T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic.',
        desc: `
            <p>Bacon ipsum dolor amet picanha doner spare ribs, shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef. Pork biltong ground round pig. Chicken filet mignon sausage cow corned beef. T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic.</p>
            <p>Items include:</p>
            <ul>
                <li>Bacon ipsum dolor amet picanha doner spare ribs</li>
                <li>Shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef</li>
                <li>Pork biltong ground round pig</li>
                <li>Chicken filet mignon sausage cow corned beef</li>
                <li>T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic</li>
                <li>Bacon ipsum dolor amet picanha doner spare ribs</li>
                <li>Shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef</li>
                <li>Pork biltong ground round pig</li>
                <li>Chicken filet mignon sausage cow corned beef</li>
                <li>T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic</li>
            </ul>
        `,
        img: '/items/item-1.jpg',
        alt: 'item #1 alt',
        weight: 24.0,
        length: null,
        width: null,
        height: null,
        slug: 'item-1',
    },
    {
        id: 20,
        name: 'Lunch',
        price: 1700,
        short: 'Cow ground round corned beef hamburger filet mignon. Cow brisket jerky pork chop, jowl shoulder capicola meatball kevin prosciutto bresaola. Pork belly chicken pastrami, turkey tail boudin shankle bresaola pork meatloaf chuck short loin ham hock. Brisket prosciutto short ribs rump bacon buffalo spare ribs sausage, pork chop t-bone porchetta bresaola pork belly. Flank salami biltong shank. Turducken ham hock buffalo landjaeger cow venison alcatra picanha bresaola shoulder. Corned beef pork loin pork frankfurter shankle capicola beef ribs leberkas.',
        desc: `
            <p>Cow ground round corned beef hamburger filet mignon. Cow brisket jerky pork chop, jowl shoulder capicola meatball kevin prosciutto bresaola. Pork belly chicken pastrami, turkey tail boudin shankle bresaola pork meatloaf chuck short loin ham hock. Brisket prosciutto short ribs rump bacon buffalo spare ribs sausage, pork chop t-bone porchetta bresaola pork belly. Flank salami biltong shank. Turducken ham hock buffalo landjaeger cow venison alcatra picanha bresaola shoulder. Corned beef pork loin pork frankfurter shankle capicola beef ribs leberkas.</p>
            <p>Items include:</p>
            <ul>
                <li>Bacon ipsum dolor amet picanha doner spare ribs</li>
                <li>Shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef</li>
                <li>Pork biltong ground round pig</li>
                <li>Chicken filet mignon sausage cow corned beef</li>
                <li>T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic</li>
                <li>Bacon ipsum dolor amet picanha doner spare ribs</li>
                <li>Shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef</li>
                <li>Pork biltong ground round pig</li>
                <li>Chicken filet mignon sausage cow corned beef</li>
                <li>T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic</li>
            </ul>            
        `,
        img: '/items/item-2.jpg',
        alt: 'item #2 alt',
        weight: 16.0,
        length: null,
        width: null,
        height: null,
        slug: 'item-2',
    },
    {
        id: 30,
        name: 'Dinner',
        price: 2700,
        short: 'Spare ribs ground round shank hamburger boudin capicola tenderloin beef ribs pork belly tail sirloin. Fatback frankfurter pork belly shoulder chislic rump bresaola. Chislic landjaeger ham, tri-tip kevin swine brisket pork chop filet mignon shank capicola meatball kielbasa. Biltong bresaola shoulder pork chop andouille hamburger leberkas tenderloin rump filet mignon sausage strip steak. Short loin tongue picanha biltong, chislic drumstick bacon shankle beef venison ribeye kielbasa jowl. Tri-tip capicola sausage cow meatloaf. Porchetta meatloaf buffalo fatback biltong brisket bacon jowl chicken frankfurter pork.',
        desc: `
            <p>Spare ribs ground round shank hamburger boudin capicola tenderloin beef ribs pork belly tail sirloin. Fatback frankfurter pork belly shoulder chislic rump bresaola. Chislic landjaeger ham, tri-tip kevin swine brisket pork chop filet mignon shank capicola meatball kielbasa. Biltong bresaola shoulder pork chop andouille hamburger leberkas tenderloin rump filet mignon sausage strip steak. Short loin tongue picanha biltong, chislic drumstick bacon shankle beef venison ribeye kielbasa jowl. Tri-tip capicola sausage cow meatloaf. Porchetta meatloaf buffalo fatback biltong brisket bacon jowl chicken frankfurter pork.</p>
            <p>Items include:</p>
            <ul>
                <li>Bacon ipsum dolor amet picanha doner spare ribs</li>
                <li>Shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef</li>
                <li>Pork biltong ground round pig</li>
                <li>Chicken filet mignon sausage cow corned beef</li>
                <li>T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic</li>
                <li>Bacon ipsum dolor amet picanha doner spare ribs</li>
                <li>Shankle hamburger meatball cupim sausage kevin bresaola sirloin rump beef</li>
                <li>Pork biltong ground round pig</li>
                <li>Chicken filet mignon sausage cow corned beef</li>
                <li>T-bone buffalo turducken pancetta ribeye hamburger porchetta frankfurter boudin chicken chislic</li>
            </ul>            
        `,
        img: '/items/item-3.jpg',
        alt: 'item #3 alt',
        weight: 16.0,
        length: null,
        width: null,
        height: null,
        slug: 'item-3',
    },
]

module.exports = { items }