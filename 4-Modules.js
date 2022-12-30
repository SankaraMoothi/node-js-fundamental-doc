// Modules - Encapsulated Code
// Every Files Is Module (As Default)
// We Have The Control What We Share (Only Share Minimum)
//Its Many Help To Re-Use The Code..

/* Below Code We Actual Create An Arrow Function In Another Function &
We Try To Call Function From This File And Also Some Required value From Other Files*/

/*Using require We Imported Here Using Export We Export From Other App*/

const names = require("./5-names-export");

const sayHai = require("./6-utils-fun");

sayHai("Susan");
sayHai(names.john);
sayHai(names.peter);

/* there Was An Hole Different Type Of Export
If U Guys Seen The 7-alternative-export U Can See It Guys */
const data = require("./7-alternative-export");
console.log(data);

/* Its An Another Type Of Import....If We Create An Function In An new File And
 Invoke The Function In the Same file Its Just Auto Run Were Ever We Import It*/
require("./8-Auto-Run-export");
