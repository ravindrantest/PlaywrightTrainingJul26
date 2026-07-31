

//Absolute Xpath:

/*  Example:
(/html/body/div[2]/div[2]/div/form/p/input)[1]

*/


/* Basic Relative Xpath:
-------------------------

1, Attribute Based Xpath: //tagName[@attribute='attributeValue’]

//input[@id="username"]

//input[@class="decorativeSubmit"]

2, Text Based Xpath : //tagName[text()='text value in DOM']

//label[text()='Username']
//h2[text()="Leaftaps Login"]

3, Parital Attribute Based Xpath :

//input[contains(@class,'decor')]

4, Parital Text Based Xpath:

amazon applicatiob example :

//label[contains(text(),'Search')]

5. Colection Based Xpath:

(//input[@class="inputLogin"])[2]
*/


/* Advanced Relative Xpath:
-----------------------------

1. Parent to Child Xpath.

(//form[@id="login"]/p)[1]

Example from amazon.in:

//div[contains(@class,'nav')]/label[@id="searchDropdownDescription"]


2. GrandParent to GrandChild Xpath:

Example from amazon.in:

//div[contains(@id,'nav')]//label[@id='searchDropdownDescription']

3. Child to Parent Xpath:

Child relative xpath/parent::parent tagName (We can also write relative xpath)

Example from amazon.in:
//input[contains(@id,'two')]/parent::div

4. GrandChild to Grandparent

GrandChild relative xpath/ancestor::Grandparent tagName (We can also write relative xpath)

Example from amazon.in:
(//label[contains(text(),'Search')]/ancestor::div[@class="nav-fill"])[2]

----------------------------------------------------------------------------

5. Elder Sibling to Younger Sibling // In CSS it is Adjacent Sibling "+" 
(Immediate Sibling)

ElderSibling relative xpath/following-sibling::Younger Sibling tagName (We can also write relative xpath)

//label[text()='Username']/following-sibling::input

Example from amazon.in:
//label[contains(text(),'Search')]/following-sibling::input

6. Younger Sibling to Elder Sibling

YoungerSibling relative xpath/preceding-sibling::Elder Sibling tagName (We can also write relative xpath)

//input[contains(@id,'two')]/preceding-sibling::label

7. Elder COusin to Younger COusin

Elder Cousin relative xpath/following::Younger Cousin tagName (We can also write relative xpath)

//label[contains(text(),'Search')]/following::input


8. Younger Cousin to ELder Cousin

YoungerCousin relative xpath/preceding::Elder Cousin tagName (We can also write relative xpath)

Example from amazon.in:
//input[contains(@id,'two')]/preceding::label


*/