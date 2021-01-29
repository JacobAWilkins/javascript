/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

const inject = document.querySelector('#inject');
inject.insertAdjacentHTML('afterbegin', '<center></center>');

const center = document.querySelector('center');
center.insertAdjacentHTML('afterbegin', '<h1></h1>');

const h1 = document.querySelector('h1');
h1.insertAdjacentHTML('afterbegin', '<i>HTML Practice Exercise TEKcamp.</i>');

center.insertAdjacentHTML('beforeend', '<h2></h2>');

const h2 = document.querySelector('h2');
h2.insertAdjacentHTML('afterbegin', '<a href="">TEKsystems "TEKcamp"</a>');

inject.insertAdjacentHTML('beforeend', '<hr />');
inject.insertAdjacentHTML('beforeend', '<p></p>');

const firstP = document.querySelectorAll('p')[0];
firstP.insertAdjacentHTML('afterbegin', 'I love <i>HTML</i> for the following reasons:');

inject.insertAdjacentHTML('beforeend', '<ol></ol>');

const ol = document.querySelector('ol');
ol.insertAdjacentHTML('beforeend', '<li>I learned it quickly.</li>');
ol.insertAdjacentHTML('beforeend', '<li>I can make web pages using code</li>');
ol.insertAdjacentHTML('beforeend', '<li>It’s fun.</li>');

inject.insertAdjacentHTML('beforeend', '<hr />');
inject.insertAdjacentHTML('beforeend', '<p></p>');

const secondP = document.querySelectorAll('p')[1];
secondP.insertAdjacentHTML('beforeend', 'My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.');

inject.insertAdjacentHTML('beforeend', '<h1>Have a great day!</h1>');
inject.insertAdjacentText('beforeend', 'I really look forward to learning how to code!  Have a great day. -[Team "Git\'er Done"]');