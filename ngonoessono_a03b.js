/*Gertrude Vanessa Ngono Essono
ngonoessono_a03b.js
INFO2124
Thoendel
12/20/2019*/

const firstName = "Gertrude";
const lastName = "Ngono";
const villainFirstName = "Count";
const villainLastName = "Dracula";
const companyName = "Apple";
let annualSalary = 150000;
let laughString = "hahahaha";
let myAge = 27;
let myWeight = 160;
let counterStartValue = 6;
console.log(
`Good evening, ${firstName}. I'm glad to see you could join us.
According to your files, you are ${myAge} years old. Hehe, that means next 
year you'll be ${myAge+1} years old and if I doubled your age, you'd be 
${myAge*2} years old!\n
I found your file because your last name, '${lastName.toUpperCase}', was all
capitalized on your folder. This is unusual because our files usually have
last names all lowercase. So I expected to see '${lastName.toLowerCase}', which
I did not see. \n
Allow me to introduce myself. My name is ${villainFirstName + " " + villainLastName}. \n
I'm the chief investigator at ${companyName.concat(" ",'Inc.')}. I've been tasked with investigating you
due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you
know, your annual salary is ${annualSalary} and 10% of your annual salary is ${annualSalary*1e-1},
which is a sizeable amount for our company.\n
I know your password. It was simple, it' just the first, third, and fourth letters of your first name:
${firstName.charAt(0)} ${firstName.charAt(2)} ${firstName.charAt(3)}\n
And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name:
${lastName.indexOf('N')} ${lastName.indexOf('o')}  ${lastName.indexOf('n')}\n
Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds "${lastName.startsWith('V')}"
... and then I ask Google home, "Does my last name end with 'n'" and Google responds \"${lastName.endsWith('n')}" \n
And sometimes, I ask Google home if my weight is finite, and Google responds "${Number.isFinite(myWeight)}", which makes me happy.
... but when I ask if my first name is finite, Google home responds, "${Number.isFinite(firstName)}", and this makes me sad.\n
Anyway, I've talked to much. Now, it's time for action. Somebody set up us for the bomb. All your base are belong to us.\n
Allow me to laugh five times:
${laughString.repeat(1)}
${laughString.repeat(1)}
${laughString.repeat(1)}
${laughString.repeat(1)}
${laughString.repeat(1)}
\n\n
**Background voice**
Now counting down:\n
${--counterStartValue}
${--counterStartValue}
${--counterStartValue}
${--counterStartValue}
${--counterStartValue}
\n
Boom!`);