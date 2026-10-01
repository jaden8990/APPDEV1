# Reflection

### 00_script_in_html.html
Ang natutunan ko sa part na ito, yung !Doctype html declaration sya na sinasabi nito sa browser na ang html ay gumagamit ng html5 at madalas ko din itong nakikita sa unahanan kapag gumagawa ng html. Mas naging malinaw din sakin kung para saan ginagamit ang console.log nag pi-print sya ng message, pero dapat may variable ka muna bago mo sya tawagin

### 01_base_syntax.js
Ang natutunan ko sa part na ito, napansin ko yung console.log pede pala sya kahit walang variable basta meron syang ("") quotation mark

### 02_variables.js
Ang natutunan ko dito sa part na ito hindi ko masyadong magets ung mga equals (==, ===) pero base on my research and understanding, kapag dalawang equal ang gamit (==) same value lang hindi sya strict kaya nagiging true sya hindi kagaya nung tatlong equal === strict sya kapag number at string magiging false sya kase syempre mag kaiba dapat kung string string lang

### 03_functions.js
Ang naintindihan ko sa dito sa part na ito si const pala hindi pedeng ire-assign ang value halimbawa, const name="jaden"; eto tama pero kung babaguhin mo name= "jarelle" mag eerror sya

### 04_object.js
Ang natutunan ko pede mo gamitin yung Dollar sign($) sa variable name at pede mo rin sya magamit kapag may single quotation mark para ipasok ang value ng variable sa loob ng string

### 05_arrays.js
Dito nag taka ako kung bakit tatlo naman yung elements ko tas may favorite food pa akong nilagay so bali apat dapat ang lalabas pero tatlo lang ang lumabas, nalaman ko yung .shift pala nag tatanggal pala sya ng unang elements, nung una talagang nalito ako kase bat ganun tatlo lang nalabas, pero now i know.

### 06_control_structures.js
Ang natutunan ko sa part na ito pag gusto mo palitan ang value pede mong gamitin yung let ung const kase hindi pedeng ire-assign ang value, nalito din ako sa part na may ganto "<=3" kase 3 lang ung nakalagay so expected result 3 din ang lalabas pero naging apat sya, un pala para hindi sya sumobra, ang ginawa ko tinanggal ko ung equal ayun naging tatlo nalang sya.

### 07_dom.html
Ang natutunan ko si "script" pala ay HTML tag na ginagamit para maglagay o mag connect ng JavaScript sa HTML page. tapos yung addEventListener naman sya pag tapos mo gawin si event elements tsaka lang sya tatakbo

### 08_essential_features.js
Yung forEach sa pag kakaintindi ko para hindi kana mahirapan na isa isahin pa ang console.log at yung mga laman, si forEach na ang gagawa para sayo kase sya ung mag iisa isa kung tama ung elements mo 

### 09_tricky_parts.js
Ang natutunan ko yung arrowfunction ay wala syang sariling "this" nanghihiram lang sya ng this sa gawa na

### 10_let_const.js
Ang code na nasa loob ng curly braces ay tinatawag na block, hindi available ang name sa labas dahil ang let ay block scope, Ang var naman lumang paraan ng paggawa ng variable, iniiwasan sya sa modern javascript kase pede sya magdulog ng unexpected bugs.

### 11_arrow_functions.js
Napansin ko na kapag sa arrow function, puwede tanggalin ang parentheses kapag iisa lang ang parameter. Hindi lahat ng traditional functions ay laging dapat palitan ng arrow function.

### 12_destructuring.js
Ang natutunan ko sa destructuring kinukuha nya yung mga values sa loob ng array kaya nagiging mas maikli sya. Halimbawa, const student = {
  name: "Janna", age: 20, kukuhanin nya yung name at age mula dun sa student tas gagawin nyang sariling variables, kaya ang magiging result na nun ay const { name, age } = student;

### 13_spread_rest.js
Ang pagkakaintindi ko yung spread operator gumagawa sya ng panibagong array na hindi maaapektuhan ang main, halimbawa const numbers = [1, 2, 3];, const newNumbers = [...numbers, 4, 5];edi ang magiging resulta na nun ay 1,2,3,4,5. Ang rest operator naman ay ginagamit sya sa function parameters para pagsama-samahin ang maraming arguments sa isang array.

### 14_classes_inheritance.js
Ang class ay blueprint na para makagawa ng object tapos yung object nasa loob ng class. Sa extends naman ginagamit sya pag gustong mag inherit ng class mula sa ibang class

### 15_module_export.js
Ang natutunan ko, ang export ay ginagamit para gawing available ang code sa ibang file.

### 16_module_import.js
 Ang import naman ay ginagamit para makuha at magamit ang code na iyon. nalilito parin ako sa pag konekta ng dalawa import at export akala ko dati ang export nag lalabas lang ng actual result un pla connected din sya sa import

### 17_logical_operators.js
Narealize ko na mahalagang maintindihan ang behavior ng logical operators dahil ginagamit sila hindi lang sa if statements kundi pati sa pagbibigay ng default values at iba pang bahagi ng JavaScript.

### 18_ternary_nullish.js
Nakakalito ang mga symbol sa part na ito. Ang Natutunan ko ang double question mark ??, na ginagamit para magbigay ng default value kapag ang value ay null o undefined

### 19_string_numbers.js
Naintindihan ko na ang parseInt() ay ginagamit para sa whole number. Ang .toFixed() naman ay ginagamit para kontrolin kung ilang decimal places ang ipapakita, lalo na sa mga value tulad ng presyo.

### 20_array_methods.js
Naintindihan ko na ang .find ay kumukuha lamang ng unang item na nag-match. Ang .some naman ay nagtatanong kung may kahit isang item na pumapasa sa condition, ang .sort naman ay ginagamit para ayusin ang order ng mga items at maging organize, tulad ng grades mula pinakamataas hanggang pinakamababa.

### 21_error_json.js
Naintindihan ko na ginagamit ito para mag-set ng sariling rules sa program. Kapag hindi nasunod ang rule, maaari akong gumawa ng malinaw na error message. Kung titignan ung throw para sakin medyo nakakalito sya pero nung nakita ko yung actual result nya mas naintindihan ko kung para saan un

### 22_async_javascript.js
Ang natutunan ko yung async/await ay magkakaibang paraan para ma-handle ang mga tasks na hindi agad natatapos. Para sa akin, malaking step ito sa pag-intindi ng JavaScript at talagang nakakalito kase kailangan mo talagang lawakan isipan mo kapag nag cocode

### 23_closure_scope.js
Mahalaga malaman kung saan accessible ang isang variable at kung paano ito naaalala ng isang function.

### overall
Malaga na bago mag push dapat icheck muna kung may kulang o mali, siguro yung pinaka nahirapan ako is yung kada may nakakalimutan ako tas naipush ko na at isa pa is mahirap intindihin yung code kung hindi mo aalamin ang halaga at kung para saan. Yung 21-23 yung hindi ko masyadong magets.