import TableRow from "@/components/TableRow";
import Kirkland from "@/components/kirkland";
import { useState } from 'react';


export default function Home() {

// get the first 2 significant digits
    function twoDigits(num) {
        const numAsString = num.toString();
        const decimalIndex = numAsString.indexOf('.');
        let result;
      
        if (decimalIndex === -1) {
          // If the number has no decimal point
          result = numAsString.slice(0, 2);
        } else {
          // If the number has a decimal point
          const numBeforeDecimal = numAsString.slice(0, decimalIndex);
          const numAfterDecimal = numAsString.slice(decimalIndex + 1);
      
          if (numBeforeDecimal.length === 2) {
            result = numBeforeDecimal;
          } else {
            result = numAsString.slice(0, decimalIndex + 2);
          }
        }
      
        return parseFloat(result);
      }

      function renderTableRows(selectedProduct) {
        //get category
        const productData = data[selectedProduct];

        return productData.map(([brand, [price, link]]) => {
          // Initialize the props for each TableRow component
          const rowProps = {
            brand,
            imageurl: imageUrls[brand],
            MinoxidilFoamPrice:'',
            MinoxidilSolutionPrice:'',
            FinasteridePrice:'',
          };
      
          // Check if the brand exists categories and set the corresponding props 
          for (const key in data) {
            const categoryData = data[key];
            const foundEntry = categoryData.find((entryBrand) => entryBrand[0] === brand);
            
        // found entry is either [['KirklandCostco', [8.3, 'https://www.costco.com/CatalogSearch?dept=All&keyword=Kirkland+Signature+Hair+Regrowth+Treatment+']], or undefined
            let price = foundEntry? foundEntry[1][0] : ''   
            rowProps[key+'Price'] = foundEntry? twoDigits(price) : ''
            rowProps[key+'Link'] = foundEntry? foundEntry[1][1] : null
          } 
      
          return <TableRow key={brand} {...rowProps} />;
        });
      }
      

      
    const imageUrls = {
        Keeps: 'https://i.ibb.co/b6yFdww/image-11.png',
        AmazonPharmacy: 'https://i.ibb.co/fCbDhjG/Amazon-Pharmacy-1-1.png',
        HappyHead: 'https://i.ibb.co/hBffkXR/Happy-Head.png',
        Hims: 'https://i.ibb.co/9r9xNZH/hims.png',
        KirklandCostco: 'https://i.ibb.co/RT1QkwL/Kirkland.png',
        Rogain: 'https://i.ibb.co/KwDFtH7/Rogaine.png',
        Roman: 'https://i.ibb.co/fY42KJc/RoLogo.png',
      };

      
  const data = {
    "MinoxidilFoam": [
        [
            "KirklandCostco",
            [
                8.331666666666667,
                "https://www.costco.com/CatalogSearch?dept=All&keyword=Kirkland+Signature+Hair+Regrowth+Treatment+"
            ]
        ],
        [
            "Keeps",
            [
                11.1,
                "https://www.keeps.com/our-products"
            ]
        ],
        [
            "Rogain",
            [
                17.333333333333332,
                "https://www.amazon.com/Rogaine-Minoxidil-Regrowth-Treatment-Thinning/dp/B0012BNVE8/"
            ]
        ],
        [
            "Hims",
            [
                20.0,
                "https://www.forhims.com/hair-loss/minoxidil-foam"
            ]
        ]
    ],
    "MinoxidilSolution": [
        [
            "KirklandCostco",
            [
                2.998333333333333,
                "https://www.costco.com/CatalogSearch?dept=All&keyword=Kirkland+Signature+Hair+Regrowth+Treatment+"
            ]
        ],
        [
            "Keeps",
            [
                7.333333333333333,
                "https://www.keeps.com/our-products"
            ]
        ],
        [
            "Rogain",
            [
                11.553333333333333,
                "https://www.amazon.com/Rogaine-Strength-Minoxidil-Solution-Treatment/dp/B0000Y8H3S/"
            ]
        ],
        [
            "Hims",
            [
                15.0,
                "https://www.forhims.com/hair-loss/minoxidil"
            ]
        ],
        [
            "Roman",
            [
                16.0,
                "https://ro.co/hair-loss/"
            ]
        ],
        [
            "HappyHead",
            [
                59.0,
                "https://www.happyhead.com/products/topical-minoxidil/"
            ]
        ]
    ],
    "Finasteride": [
        [
            "AmazonPharmacy",
            [
                13.7,
                "https://pharmacy.amazon.com/dp/B084BR2Z6S?keywords=Finasteride&qid=1674104225&sr=8-1"
            ]
        ],
        [
            "Keeps",
            [
                16.666666666666668,
                "https://www.keeps.com/our-products"
            ]
        ],
        [
            "Roman",
            [
                20.0,
                "https://ro.co/hair-loss/"
            ]
        ],
        [
            "HappyHead",
            [
                24.0,
                "https://www.happyhead.com/products/oral-finasteride/"
            ]
        ],
        [
            "Hims",
            [
                26.0,
                "https://www.forhims.com/shop/hair-finasteride"
            ]
        ]
    ]
}

  
    const [selectedProduct, setSelectedProduct] = useState('MinoxidilFoam');

    const handleProductClick = (product) => {
      setSelectedProduct(product);
    };

    const styles = {
        productType: {
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          width: '240px',
          height: '193px',
          backgroundRepeat: 'no-repeat',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        },
      
        image: {
          borderRadius: '20px',
        },
      

      };
      

  

  return (
    <>

    <div className="flex justify-center pt-8">
    <img src="https://i.ibb.co/6HjLbhS/30994969970-2.png" className="w-80 h-40 object-contain "/>
    </div>
   
      <div className="pt-28 flex flex-row justify-center">
        
        <button style={{...styles.productType}} onClick={() => handleProductClick('MinoxidilFoam') }>
            <div className = {`relative ${selectedProduct === 'MinoxidilFoam' ? 'rounded-[20px] border-4 border-[#465578]' : ''}`}>
                <img src='https://i.ibb.co/BzrwVRT/imagesss.png' style = {styles.image}/>
                <div className="innertext text-[#aeb7d7] text-xl bottom-12 left-[90px] absolute"> Foam</div>
            </div>
        </button>

        <button style={{...styles.productType}} onClick={() => handleProductClick('MinoxidilSolution') } className = "ml-36 mr-36 relative">
            <div className = {`relative ${selectedProduct === 'MinoxidilSolution' ? 'rounded-[20px] border-4 border-[#465578]' : ''}`}>
                <img src='https://i.ibb.co/BzrwVRT/imagesss.png' style = {styles.image}/>
                <div className="innertext text-[#aeb7d7] text-xl bottom-12 left-[80px] absolute "> Solution</div>
            </div>
        </button>

        <button style={{...styles.productType}} onClick={() => handleProductClick('Finasteride') }>
            <div className = {`relative ${selectedProduct === 'Finasteride' ? 'rounded-[20px] border-4 border-[#465578]' : ''}`}>
                <img src='https://i.ibb.co/KmWMDWb/Finasteride-1.png' style = {styles.image}/>  
            </div>
        </button>

      </div>

      

    <div className="mt-24 grid justify-center right-8 relative ">
        
    {renderTableRows(selectedProduct)}
       
    </div>
    


        <div className="pb-24"></div>

    </>


  )
}
    