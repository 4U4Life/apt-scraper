  
//   var Xray = require('x-ray')
//   var x = Xray()
//   var url = 'https://www.trulia.com/for_rent/Conway,AR/2p_beds/0-900_price/APARTMENT,APARTMENT_COMMUNITY,APARTMENT%7CCONDO%7CTOWNHOUSE,CONDO,COOP,LOFT,SINGLE-FAMILY_HOME,TIC,TOWNHOUSE_type/'
  
//   x(url,'ul.search-result-list-container', ['li'])
//   .write('data.json')


  var Xray = require('x-ray')
  var x = Xray()
  
  var url = 'https://www.trulia.com/for_rent/Conway,AR/2p_beds/0-900_price/APARTMENT,APARTMENT_COMMUNITY,APARTMENT%7CCONDO%7CTOWNHOUSE,CONDO,COOP,LOFT,SINGLE-FAMILY_HOME,TIC,TOWNHOUSE_type/,'
  // var html = 'page.html'
      
  var group = '.jiZmPM'

  x(url, group, [
    {
      amount: 'h2',
      name: 'div .Text__TextBase-sc-1cait9d-0-div[data-testid="property-address"]',
      address: 'img[class="Image__ImageContainer-sc-1motiir-0 hPjFaC"]@alt',
      price: 'div .Text__TextBase-sc-1cait9d-0-div[data-testid="property-price"]',
      beds: 'div .Text__TextBase-sc-1cait9d-0-div[data-testid="property-beds"]',
      bath: 'div .Text__TextBase-sc-1cait9d-0-div[data-testid="property-baths"]',
      listing: 'a@href',
    //   image: 'img[class="Image__ImageContainer-sc-1motiir-0 hPjFaC"]@src'
    }
  ])

    // .paginate('.pagination-page-link a@href')
    // .limit(1)
    .write('data.json')



    
    
    
