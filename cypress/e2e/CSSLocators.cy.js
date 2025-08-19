describe('CSSlocators', () => {

it('csslocators', () => {

  cy.visit('https://www.amazon.com/?tag=amazusnavi-20&hvadid=675149237887&hvpos=&hvnetw=g&hvrand=18346582694542139563&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9194536&hvtargid=kwd-10573980&ref=pd_sl_7j18redljs_e&hydadcr=28883_14649097')

  cy.get('#twotabsearchtextbox').type('T-SHIRT')

  cy.get('#nav-search-submit-button').click()
    
 


})
})